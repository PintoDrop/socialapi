const { Model, Datatypes } = require("sequilize");
const sequilize = require("../config/connection");

class Thought extends Model {}

Thought.init(
  {
    thoughtText: {
      type: Datatypes.STRING,
      // required
      // must be between 1 and 280 characters
    },
    createdAt: {
      // date,
      // set default value to current time stamp,
      // yser getter method to format the timestamp on query,
    },
    username: {
      type: Datatypes.STRING,
      // required
    },
    reactions: {
      // array of nested documents created with reaction schema
    }
  }
)


module.exports = Thought