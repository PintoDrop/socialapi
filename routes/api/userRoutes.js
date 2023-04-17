const router = require("express").Router();

const {
  getUsers,
  getOneUser,
  createUser,
  deleteUser,
  addThought,
  removeThought,
} = require("../../controllers/user");

router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getOneUser).delete(deleteUser);

router.route("/:userId/thoughts").post(addThought);

router.route("/:userId/thoughts/:thoughtId").delete(removeThought);

module.exports = router;