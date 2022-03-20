"use strict";

function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });
}

module.exports = async (url) => {
  await sleep(300);
  if (url === "http://error.com") throw Error("network error");
  return Buffer.from("some data");
};
