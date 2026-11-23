import { describe, expect, it } from "vitest";

import { ErrorCode } from "@/lib/enums";
import { hasTransientNetworkCode, mapErrorStatus } from "@/lib/errors";

describe("mapErrorStatus", function mapErrorStatusTests() {
  it.each([
    [ErrorCode.Unauthorized, 401],
    [ErrorCode.Forbidden, 403],
    [ErrorCode.NotFound, 404],
    [ErrorCode.Conflict, 409],
    [ErrorCode.ValidationError, 422],
    [ErrorCode.TooManyRequests, 429],
    [ErrorCode.DatabaseError, 500],
  ])("maps %s to %i", function mapsErrorCode(code, expectedStatus) {
    expect(mapErrorStatus(code)).toBe(expectedStatus);
  });
});

describe("hasTransientNetworkCode", function transientNetworkCodeTests() {
  it("recognizes retryable network failures", function recognizesRetryableFailures() {
    const error = Object.assign(new Error("connection reset"), {
      code: "ECONNRESET",
    });

    expect(hasTransientNetworkCode(error)).toBe(true);
  });

  it("rejects unrelated errors", function rejectsUnrelatedErrors() {
    expect(hasTransientNetworkCode(new Error("invalid input"))).toBe(false);
  });
});
