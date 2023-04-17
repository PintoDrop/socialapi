const { Schema, model } = require("mongoose");
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
      // must be between 1 and 280 characters
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtTime) =>
        moment(createdAtTime).format("MMMM DD, YYYY [at] hh:mm a"),
      // date,
      // set default value to current time stamp,
      // Use a getter method to format the timestamp on query
    },
    username: {
      type: String,
      required: true,
      // required
    },
    reactions: [reactionSchema],
    // array of nested documents created with reaction schema
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// const reactionSchema = new Schema (
//   {
//     reactionId: {
//       type: Schema.Types.ObjectId,
//       default: () => new Types.ObjectId(),
//     },
//     reactionBody: {
//       type: String,
//       required: true,
//       maxlength: 280,
//     },
//     username: {
//       type: String,
//       required: true,
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//       get: createdAtVal => moment(createdAtVal).format("MMMM DD, YYYY [at] hh:mm a"),
//     },
//   },
//   {
//     toJSON: {
//       virtuals: true,
//       getters: true
//     }, 
//     id: false,
//   }
// )

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;