import { ok } from "neverthrow";
import { describe, expect, it, vi } from "vitest";

import { createAction } from "@/actions/base";
import { ErrorCode } from "@/lib/enums";

describe("action authentication", function actionAuthenticationTests() {
  it("stops protected actions before parsing or handling input", async function stopsProtectedActions() {
    const parse = vi.fn(function parseInput() {
      return ok("parsed");
    });
    const handler = vi.fn(function handleInput() {
      return Promise.resolve(ok("handled"));
    });
    const action = createAction<string, string, ErrorCode.ValidationError>({
      parse,
      handler,
    });

    const result = await action("input");

    expect({
      errorCode: result.isErr() ? result.error.code : null,
      parseCalls: parse.mock.calls.length,
      handlerCalls: handler.mock.calls.length,
    }).toEqual({
      errorCode: ErrorCode.Unauthorized,
      parseCalls: 0,
      handlerCalls: 0,
    });
  });
});
