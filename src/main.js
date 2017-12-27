async function test() {
  return 1;
}

export default async () => {
  console.log(process.env.NODE_ENV);
  console.log(await test());
}
