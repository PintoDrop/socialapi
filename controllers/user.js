const { User, Thought } = require("../models");

module.exports = {
  getUsers(req,res) {
    User.find({}).then((user) => res.json(user)).catch((err) => res.status(500).json(err));
  },

  getOneUser(req,res) {
    User.findOne({ _id: req.params.userId }).then((user) => res.json(user)).catch((err) => res.status(500).json(err));
  },

  createUser(req,res) {
    User.create(req, res) {
      User.create(req.body).then((user) => res.json(user)).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
    }
  }
}




// const { ObjectId } = require("mongoose").Types;
// const { User, Thought } = require("../models");

// getUsers(req, res) {
//   User.find().then(async (users) => {
//     const userObj = { users, };
//     return res.json(userObj);
//   })
//   .catch((err) => {
//     console.log(err);
//     return res.status(500).json(err);
//   });
// }

// module.exports = User