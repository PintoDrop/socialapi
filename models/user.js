const { Model, Datatypes } = require("sequilize");
const sequilize = require("../config/connection");

class User extends Model {}

User.init(
  {
    username: {
      type: Datatypes.STRING,

      String, unique, required, trimmed
    },
    email: {
      type: Datatypes.STRING,
      // required, unique, must match valid email with mongoose
       validate: {
        isEmail: true
      }
    },
    thoughts: {
      // array of _id values referencing the thought model
    },
    friends: {
      // array of _id values referencing the User model
    }
  }
)




// User.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//       validate: {
//         isEmail: true
//       }


module.exports = User;
