import mongoose from "mongoose";
import config from "../config/config.js";

export default function connect() {
  return mongoose.connect(config.db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
