import { Transform } from "stream";

export class FilterFieldByValue extends Transform {
  constructor(field, value, options = {}) {
    options.objectMode = true;
    super(options);
    this.field = field;
    this.value = value;
  }

  _transform(chunk, enc, cb) {
    if (chunk[this.field] === this.value) {
      this.push(JSON.stringify(chunk));
    }

    cb();
  }

  // Add the transform method that will test the field/value
  // defined in the constructor. Remember to invoke the callback
  // whether or not the value matches.
}
