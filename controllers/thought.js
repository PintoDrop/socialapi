const { User, Thought } = require("../models");


module.exports = {
  getThoughts(req, res) {
    Thought.find({})
    .then((thought) => res.json(thought))
    .catch((err) => res.status(500).json(err));
  },

  getOneThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
    .then((thought) => res.json(thought))
    .catch((err) => res.status(500).json(err));
  },

  createThought(req,res) {
    Thought.create(req, res) {
      Thought.create(req.body).then((thought) => res.json(thought)).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
    }
  },

    updateThought(req, res) {
      Thought.findOneAndUpdate({ _id: req.params.thoughtId })
      .then((thought) => !thought 
      ? res.status(404).json ({ message: 'No thoughts with this id' })
      : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
    },

    deleteThought(req, res) {
      Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) => 
      !thought
      ? res.status(404).json ({ message: 'No thoughts with this id' })
      : User.deleteMany({ _id: { $in: thought.users } })
      )
      .then(() => res.json ({ message: 'Thought and user has been deleted' }))
      .catch((err) => res.status(500).json(err));
    }
  }
// }