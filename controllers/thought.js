const { User, Thought } = require("../models");


module.exports = {
  async getThoughts(req, res) {
    try {
      const dbStuff = await Thought.find();
      res.json(dbStuff);
    } catch (error) {
      console.log(error);
      res.status(500).json(err);
    }
  },

  getOneThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought matches this id" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) => {
        if (!user) {
          return res
            .status(404)
            .json({
              message: "Thought was created, however it was not attached to a user",
            });
        }
        res.json({ message: "You made a thought!" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought matches this id" })
          : res.json(thought)
      )

      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought matches this id" })
          : User.deleteMany({ _id: { $in: thought.users } })
      )
      .then(() => res.json({ message: "Thought has been deleted" }))
      .catch((err) => res.status(500).json(err));
  },

  createReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId},
      { $addToSet: { reactions: req.body }},
      {runValidators: true, new: true }
    )
    .then((thought) => 
      !thought
      ? res.status(404).json ({ message: "No thought matches this id" })
      : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
  },
  
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: {reactions: { reactionId: req.params.reactionId }}},
      {runValidators: true, new: true }
    )
    .then((thought) =>
    !thought
    ? res.status(404).json ({ message: "No thought matches this id" })
    :res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
  }
};
// }
// module.exports = thought