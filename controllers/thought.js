const { User, Thought } = require("../models");


module.exports = {
  getThoughts(req, res) {
    Thought.find({}).then((thought) => res.json(thought)).catch((err) => res.status(500).json(err));
  },

  getOneThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId }).then((thought) => res.json(thought)).catch((err) => res.status(500).json(err));
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
    },
    
    deleteThought(req, res)
  }
// }