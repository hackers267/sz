import { green, red } from "./deps.ts";

export async function genService(files: string[]) {
  try {
    await Deno.mkdir("service");
  } catch (e) {
    console.log(red("mkdir dir error,because the dir existed!"));
  } finally {
    const filePromises = files.map((x) => `service/${x}`).filter((x) =>
      fileExist(x)
    ).map((x) => {
      Deno.writeTextFile(x, "");
      return x;
    });
    Promise.all(filePromises).then((strings) => {
      strings.forEach((s) => console.log(green(`Create ${s} Service,Success`)));
    }).catch(() => {
      console.log(red("Something Error"));
    });
  }
}

function fileExist(file: string) {
  try {
    Deno.statSync(file);
    return false;
  } catch (e) {
    return true;
  }
}
