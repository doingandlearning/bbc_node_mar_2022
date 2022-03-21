import mongoose from "mongoose";

/**
 * 2.2 author:
 *    2.2.1 required, error message of: "The author is required"
 *    2.2.2 string
 *    2.2.3 trim
 *
 * 2.3 publishDate:
 *    2.3.1 required, error message of: "The email is required"
 *    2.3.2 Date
 *
 * 2.4 rating:
 *    2.4.1 optional
 *    2.4.2 number

 * 2.5 with the "createdAt" and "updatedAt" properties that are created automatically
 */

const BookSchema = new mongoose.Schema({
  title: { type: String, trim: true, required: true },
});

const BookModel = new mongoose.model("book", BookSchema);

export default BookModel;
