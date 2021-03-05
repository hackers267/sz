import { disValidInput, validInput } from "./utils.ts";
import { assertEquals } from "./deps.ts";

const commands = ["a", "b", "c"];
Deno.test("validInput", () => {
  const inputs = ["a", "c"];
  const result = validInput(inputs, commands);
  assertEquals(result, true);
});
Deno.test("disValidInput", () => {
  const input = ["a", "d"];
  const result = disValidInput(input, commands);
  assertEquals(result, "d");
});
