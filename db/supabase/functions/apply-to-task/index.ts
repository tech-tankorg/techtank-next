/**
 * apply-to-task — a signed-in Slack member applies to a task.
 *
 * Authorization is entirely in SQL: this forwards the caller's JWT to
 * `apply_to_contribution_task`, which enforces identity, workspace, the
 * open/unassigned rule, and de-duplication. This function only owns
 * notification (organizer alert + applicant DM), which can't fail the
 * request — the row is committed before it runs.
 */

import { createCallerClient } from "../_shared/supabase.ts";
import { HttpError, servePost } from "../_shared/http.ts";
import { notifySlack, dmSlackUser } from "../_shared/slack.ts";
import { applicationNotification, applicationReceiptDm } from "../_shared/slack-messages.ts";

const SITE_URL = Deno.env.get("PUBLIC_SITE_URL") ?? "https://www.techtankto.com";

interface ApplyResult {
  status: "applied" | "already_applied" | "closed" | "not_found" | "wrong_workspace";
  task_title?: string;
  applicant_name?: string;
  applicant_email?: string;
  slack_user_id?: string;
}

servePost("apply-to-task", async (req) => {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) throw new HttpError(401, "Please connect Slack to apply.");

  const { task_id: taskId, message } = (await req.json()) as { task_id?: string; message?: string };
  if (!taskId) throw new HttpError(400, "task_id is required");

  // Runs as the caller so the SQL gate sees their real identity, not the service role.
  const caller = createCallerClient(authHeader);
  const { data, error } = await caller.rpc("apply_to_contribution_task", {
    p_task_id: taskId,
    p_message: message ?? "",
  });
  if (error) {
    // 42501 is the "not signed in" guard inside the function.
    if (error.code === "42501") throw new HttpError(401, "Please connect Slack to apply.");
    throw error;
  }

  const result = data as ApplyResult;
  switch (result.status) {
    case "not_found":
      throw new HttpError(404, "Task not found");
    case "wrong_workspace":
      throw new HttpError(403, "That Slack account isn't in the TechTank workspace.");
    case "closed":
      throw new HttpError(409, "This task is no longer taking applications.");
    case "already_applied":
      return { ok: true, already_applied: true };
  }

  // Fresh application. DM the applicant first so the organizer message can
  // report whether their receipt actually landed.
  const title = result.task_title ?? "a task";
  const taskUrl = `${SITE_URL}/tasks/${taskId}`;

  const dmFailure = result.slack_user_id
    ? await dmSlackUser(result.slack_user_id, applicationReceiptDm({ taskTitle: title, taskUrl, browseUrl: `${SITE_URL}/tasks` }))
    : "no Slack id on the application";

  await notifySlack(
    applicationNotification({
      taskTitle: title,
      taskUrl,
      adminUrl: `${SITE_URL}/admin/tasks`,
      applicantSlackId: result.slack_user_id ?? null,
      applicantName: result.applicant_name ?? "Someone",
      note: message ?? "",
      dmFailure,
    }),
  );

  return { ok: true, already_applied: false };
});
