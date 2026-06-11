import { describe, expect, test, vi } from "vitest";
import { buildMediaUrl, fetchRecentMedia } from "./graph-api";

const config = {
  userId: "178414",
  accessToken: "TOKEN123",
  version: "v21.0",
  limit: 25,
};

describe("buildMediaUrl", () => {
  test("targets the user's media edge with all required fields", () => {
    const url = new URL(buildMediaUrl(config));
    expect(url.origin + url.pathname).toBe(
      "https://graph.instagram.com/v21.0/178414/media",
    );
    expect(url.searchParams.get("access_token")).toBe("TOKEN123");
    expect(url.searchParams.get("limit")).toBe("25");
    const fields = url.searchParams.get("fields") ?? "";
    expect(fields).toContain("permalink");
    expect(fields).toContain("timestamp");
    expect(fields).toContain("children{");
  });
});

describe("fetchRecentMedia", () => {
  test("returns the validated payload on success", async () => {
    const fakeFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        data: [
          {
            id: "1",
            media_type: "IMAGE",
            media_url: "https://c/a.jpg",
            permalink: "https://www.instagram.com/p/X/",
            timestamp: "2024-05-14T16:19:58+0000",
          },
        ],
      }),
    });
    const res = await fetchRecentMedia(config, fakeFetch as unknown as typeof fetch);
    expect(res.data).toHaveLength(1);
    expect(res.data[0].id).toBe("1");
  });

  test("throws with status and body on a non-ok response", async () => {
    const fakeFetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 401,
      text: async () => "invalid token",
    });
    await expect(
      fetchRecentMedia(config, fakeFetch as unknown as typeof fetch),
    ).rejects.toThrow(/401.*invalid token/);
  });
});
