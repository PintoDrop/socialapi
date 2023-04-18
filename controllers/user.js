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
    .populate("friends")
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
          return res
            .status(404)
            .json({ message: "No user matches with this id" });
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
          ? res.status(404).json({ message: "No user matches with this id" })
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
              .json({ message: "User deleted, but no thoughts were located" })
          : res.json({ message: "This user has been deleted from database" })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  newFriend(req, res) {
    console.log("You made a new friend!");
    User.findOneAndUpdate ({ _id: req.params.userId },
       {$addToSet: { friends: req.params.friendId }}, 
       {runValidators: true, new: true})
    .then((user) => 
    !user
    ?res.status(404).json({ message: "No user matching with this id"})
    :res.json(user)
    )
    .catch((err) => res.status(500).json(err));

},

  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: { friendId: req.params.friendId }}},
      { runValidators: true, new: true}
    )
    .then((user) =>
    !user
    ? res.status(404).json ({ message: "No friend is matching with this Id" })
    : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
  }


}

