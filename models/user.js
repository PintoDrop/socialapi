const { Schema, model } = require("mongoose");
const thoughtSchema = require("./Thought");



const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,

      // String, unique, required, trimmed
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
      // match: [
      //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      //   "Please fill a valid email address",
      // ],
      // required, unique, must match valid email with mongoose
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    // array of _id values referencing the thought model

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    // array of _id values referencing the User model
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const User = model("User", userSchema);


module.exports = User;
