const router = require("express").Router();


const {
  getThoughts,
  getOneThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require("../../controllers/thought.js")


router.route("/").get(getThoughts).post(createThought);

router.route("/:thoughtId").get(getOneThought).put(updateThought).delete(deleteThought);

router.route("/:thoughtId/reactions").post(createReaction);

router.route("/:thoughtid/reactionsreactionId").delete(deleteReaction);


module.exports = router;