const { readFile } = require("fs").promises;
const files = [__filename, "foo", __filename];
const print = (contents) => {
  console.log(contents.toString());
};

async function run() {
  try {
    const readers = files.map((file) => readFile(file));
    const results = await Promise.allSettled(readers);

    const data = results
      .filter(({ status }) => status === "fulfilled")
      .map(({ value }) => value);

    print(Buffer.concat(data));

    results
      .filter(({ status }) => status === "rejected")
      .forEach(({ reason }) => {
        throw new Error(reason);
      });
  } catch (error) {
    console.error(error);
  }
}

run().catch(console.error);
