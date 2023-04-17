const router = require("express").Router();

const {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user.js");

router.route("/").get(getUsers).post(createUser);

// trying diff route
// router.route("./users").get(getUsers).post(createUser);

router.route("/:userId").get(getOneUser).put(updateUser).delete(deleteUser);

// router.route("/:userId/thoughts").post(addFriend);

// router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;