await genService();

async function genService() {
    await Deno.mkdir("service")
    Deno.writeTextFile("service/index.ts", "");
    Deno.writeTextFile("service/fetch.ts", "");
    Deno.writeTextFile("service/fun.ts", "");
    Deno.writeTextFile("service/fun.test.ts", "");
}
