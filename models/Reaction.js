const { Schema, model } = require("mongoose");
const thoughtSchema = require("./Thought");

const reactionSchema = new Schema(

{
  reactionId: {
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
    required: true
  }
  createdAt: {
    type: Date,
    default: Date.now,
    // date
    // set default value to current time
    // use getter method to format timestamp on query
  }
}
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
)

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;