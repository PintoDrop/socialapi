const router = require("express").Router();

const {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  newFriend,
  deleteFriend,
} = require("../../controllers/user.js");

router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getOneUser).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(newFriend).delete(deleteFriend);

// router.route("/:userId/friends/:friendId").delete(deleteFriend);

module.exports = router;
