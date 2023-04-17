const { Schema, model } = require("mongoose");
const reactionSchema = require('./Reaction');
const moment = require("moment");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280, 
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtTime) =>
        moment(createdAtTime).format("MMMM DD, YYYY [at] hh:mm a"),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);


const Thought = model('Thought', thoughtSchema);

module.exports = Thought;