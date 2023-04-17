const router = require("express").Router();

const {
  getUsers,
  getOneUser,
  createUser,
  deleteUser,
  addThought,
  remove,Thought
} = require("../../controllers/user");

