const { Schema, Types } = require("mongoose");
const moment = require("moment");
const thoughtSchema = require("./Thought");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtTime) =>
        moment(createdAtTime).format("MMMM DD, YYYY [at] hh:mm a"),

    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);


module.exports = reactionSchema;