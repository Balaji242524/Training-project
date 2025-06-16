const express = require("express");
const router = express.Router();
const Member = require("../models/member");

router.get("/", async (req, res) => {
  const members = await Member.find();
  res.json(members);
});

router.post("/", async (req, res) => {
  const member = new Member({ name: req.body.name });
  await member.save();
  res.json(member);
});

module.exports = router;
