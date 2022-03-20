"use strict";

const store = require("./store.js");

test("Will throw if input is not a buffer", (done) => {
  store("Not a buffer", (err) => {
    expect(err).toStrictEqual(Error("input must be a buffer"));
    done();
  });
});
