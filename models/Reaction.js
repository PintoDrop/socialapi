const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Reaction = new Schema(

{
  reactionId: {
    // use mongooses ObjectId data type
  },
  reactionBody: {
    type: String, 
    required: true,
    // max characters 280
  },
  username: {
    type: String,
    required: true
  }
  createdAt: {
    // date
    // set default value to current time
    // use getter method to format timestamp on query
  }
}
)

module.exports = reaction