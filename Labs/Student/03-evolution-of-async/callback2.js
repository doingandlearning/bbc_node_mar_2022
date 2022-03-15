const fs = require("fs");

// Instead of passing it up the stack throw it instead and try to catch it later on.

function readFileThenDo(next) {
  fs.readFile("./blah.nofile", (err, data) => {
    if (err) throw err;
    next(data);
  });
}
// Hint use try..catch

try {
  readFileThenDo((data) => {
    console.log(data);
  });
} catch (error) {
  console.error(error);
}
