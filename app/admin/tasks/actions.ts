"use server";

import { createServerSupabaseClient } from "@/utils/supabase/server";
import {
  adminContributionTaskSchema,
  contributionTaskApplicationSchema,
  type AdminContributionTask,
  type ContributionDifficulty,
  type ContributionStatus,
  type ContributionTaskApplication,
} from "@/constants/contribution-board";

// Cookie-authed reads/writes over SECURITY DEFINER RPCs; the SQL
// `assert_caller_is_admin()` gate throws for non-admins rather than leaking data.

export interface SaveContributionTaskInput {
  id: string | null;
  title: string;
  summary: string;
  bodyMarkdown: string;
  status: ContributionStatus;
  difficulty: ContributionDifficulty;
  tags: string[];
}

export async function listContributionTasks(): Promise<AdminContributionTask[]> {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.rpc("admin_list_contribution_tasks");
  if (error) throw new Error(error.message);
  return adminContributionTaskSchema.array().parse(data ?? []);
}

export async function saveContributionTask(input: SaveContributionTaskInput): Promise<void> {
  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.rpc("admin_save_contribution_task", {
    p_id: input.id,
    p_title: input.title,
    p_summary: input.summary,
    p_body_markdown: input.bodyMarkdown,
    p_status: input.status,
    p_difficulty: input.difficulty,
    p_tags: input.tags,
  });
  if (error) throw new Error(error.message);
}

export async function assignContributionTask(taskId: string, assignedName: string | null): Promise<void> {
  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.rpc("admin_assign_contribution_task", {
    p_task_id: taskId,
    p_assigned_name: assignedName,
  });
  if (error) throw new Error(error.message);
}

export async function deleteContributionTask(id: string): Promise<void> {
  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.rpc("admin_delete_contribution_task", { p_id: id });
  if (error) throw new Error(error.message);
}

export async function reorderContributionTasks(orderedIds: string[]): Promise<void> {
  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.rpc("admin_reorder_contribution_tasks", {
    p_ordered_ids: orderedIds,
  });
  if (error) throw new Error(error.message);
}

export async function listTaskApplications(taskId: string): Promise<ContributionTaskApplication[]> {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.rpc("admin_list_contribution_task_applications", {
    p_task_id: taskId,
  });
  if (error) throw new Error(error.message);
  return contributionTaskApplicationSchema.array().parse(data ?? []);
}
