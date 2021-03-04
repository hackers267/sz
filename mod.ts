await genService();

async function genService() {
  await Deno.mkdir("service");
  Promise.all([
    Deno.writeTextFile("service/index.ts", ""),
    Deno.writeTextFile("service/fetch.ts", ""),
    Deno.writeTextFile("service/fun.ts", ""),
    Deno.writeTextFile("service/fun.test.ts", ""),
  ]).then(() => {
    console.log("Create Service,Success");
  }).catch((e) => {
    console.error(e);
  });
}
