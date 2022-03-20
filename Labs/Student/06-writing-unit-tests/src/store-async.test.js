const store = require("./store-async.js");

test("that it will throw if there is a not a buffer", async () => {
  try {
    const result = await store("This is a string");
    //
  } catch (error) {
    expect(error).toStrictEqual(Error("input must be a buffer"));
  }
});

test("it works with a buffer", async () => {
  const result = await store(Buffer.from("test"));
  expect(typeof result.id).toBe("string");
  expect(result.id.length).toBe(4);
});
