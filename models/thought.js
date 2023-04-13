const { Model, Datatypes } = require("sequilize");
const sequilize = require("../config/connection");

class Thought extends Model {}

Thought.init(
  {
    thoughtText: {
      type: String,
      required: true,
      // must be between 1 and 280 characters
    },
    createdAt: {
      type: Date,
      // date,
      // set default value to current time stamp,
      // yser getter method to format the timestamp on query,
    },
    username: {
      type: String,
      required: true
      // required
    },
    reactions: {
      // array of nested documents created with reaction schema
    }
  }
)


module.exports = Thought