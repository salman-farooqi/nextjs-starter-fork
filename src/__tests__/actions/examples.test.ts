import { describe, expect, it } from "vitest";

import { createExampleFormAction } from "@/actions/examples";

describe("createExampleFormAction", function createExampleFormActionTests() {
  it("rejects mutations until verified authentication is configured", async function rejectsUnauthenticatedMutation() {
    const formData = new FormData();

    const result = await createExampleFormAction(undefined, formData);

    expect(result).toEqual({ success: false, error: "Login required." });
  });
});
