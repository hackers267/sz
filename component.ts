import { genService } from "./service.ts";

const array = extractComponentArgs(Deno.args);

const serviceFiles = ["index.ts", "fetch.ts", "fun.ts", "fun.test.ts"];
const componentName = last(array);
const componentArgs = dropRight(array).map((item) => {
  return item.replace(/^-+/gi, "");
}).reduce((acc, pre) => {
  return { ...acc, [pre]: true };
}, {});

main(componentName, componentArgs);

async function main(name, args) {
  genComponent(componentName);
  if (args.simple === false) {
    genService(serviceFiles);
  }
}

async function genComponent(name: string) {
  await Deno.mkdir(name);
  Deno.chdir(name);
  await Deno.writeTextFile("index.tsx", "");
}

function extractComponentArgs(inputs: string[]) {
  const index = inputs.findIndex((x) => x === "-c");
  const rest = inputs.slice(index);
  const lastIndex = rest.findIndex((x) => !x.startsWith("-"));
  return inputs.slice(index, lastIndex + 1);
}

function last<T>(array: T[]): T {
  const length = array.length;
  return array[length - 1];
}

function dropRight<T>(array: T[], n = 1): T[] {
  const length = array.length;
  return array.slice(0, length - n);
}
