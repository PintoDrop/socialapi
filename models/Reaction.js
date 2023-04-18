const { Schema, Types } = require("mongoose");
const moment = require("moment");
const thoughtSchema = require("./Thought");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
      // use mongooses ObjectId data type
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
      // max characters 280
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
      // date
      // set default value to current time
      // use getter method to format timestamp on query
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);


// Issue with models in reaction
// const Reaction = model('Reaction', reactionSchema);

// module.exports = Reaction;

// trying different export
module.exports = reactionSchema;