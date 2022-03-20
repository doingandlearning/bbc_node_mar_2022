const req = require("./req.js");

// global.setTimeout = require("timers").setTimeout;

// test("responds with data", (done) => {
//   req("http://noerrorplease.com", (err, data) => {
//     expect(err === null).toBe(true);
//     expect(Buffer.isBuffer(data)).toBeTruthy();
//     expect(data).toStrictEqual(Buffer.from("some data"));
//     done();
//   });
// });

test("handles network errors", (done) => {
  req("http://error.com", (err) => {
    expect(err).toStrictEqual(Error("network error"));
    done();
  });
});

// test("handles network errors", (done) => {
//   req("http://error.com", (err, data) => {
//     expect(err).toStrictEqual(Error("network error"));
//     done();
//   });
// });

test("responds with data", (done) => {
  req("http://example.com", (err, data) => {
    expect(err == null).toBe(true);
    expect(Buffer.isBuffer(data)).toBeTruthy();
    expect(data).toStrictEqual(Buffer.from("some data"));
    done();
  });
});
