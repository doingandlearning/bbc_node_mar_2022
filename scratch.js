const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("my-cool-event", (...args) => console.log(args));
myEmitter.on("my-cool-event", () => console.log("they called my name"));
myEmitter.prependListener("my-cool-event", () =>
  console.log("I got called first")
);
myEmitter.prependListener("my-cool-event", () => console.log("No, I did"));

myEmitter.on("error", () => console.log("There was an error."));
myEmitter.emit("error");

const listener = (a, b) => console.log(a + b);

myEmitter.on("add", listener);
myEmitter.emit("add", 3, 4);
myEmitter.emit("add", 3, 4);

myEmitter.removeAllListeners();

myEmitter.emit("add", 4, 4);

myEmitter.emit("my-cool-event");
// myEmitter.on(
//   "sum",
//   (input, output) => `This array of numbers (${input}) sums to ${output}.`
// );

// function countNumbers(myEmitter, ...nums) {
//   const result = nums.reduce((a, c) => a + c, 0);
//   return myEmitter.emit("sum", nums, result);
// }

// countNumbers(myEmitter,1, 2, 3, 4, 5, 6);
