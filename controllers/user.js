const { User, Thought } = require("../models");


module.exports = {
  getUsers(req, res) {
    User.find({})
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  getOneUser(req, res) {
    User.findOne({ _id: req.params.userId })
    .populate("thoughts")
    // .populate("friends")
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body, },
      {
        runValidators: true,
        new: true,
      }
    )
      .then((user) => {
        if (!user) {
          return res.status(404).json ({ message: 'User id not valid' });
        }
        res.json(user);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err)
      });
  },

  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "This user does not exist" })
          : Thought.findOneAndUpdate(
              { users: req.params.userId },
              { $pull: { users: req.params.userId } },
              { new: true }
            )
      )
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: "User deleted, but no thoughts are located" })
          : res.json({ message: "This user has been deleted from database" })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

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
