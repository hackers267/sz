import { genService } from "./service.ts";
import { red } from "./deps.ts";
import { commands } from "./constant.ts";
import { disValidInput, validInput } from "./utils.ts";

const files = ["index.ts", "fetch.ts", "fun.ts", "fun.test.ts"];
const input_commands = Deno.args.filter((item) => item.startsWith("-"));

if (validInput(input_commands, commands)) {
  if (input_commands.includes("-s")) {
    genService(files);
  }
} else {
  const dis_valid_input = disValidInput(input_commands, commands);
  console.log(`Sorry, the args ${red(dis_valid_input)} is unsupported`);
}
