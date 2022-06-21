const router = require("express").Router();
const { Blog, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  // console.log(req.body);
  console.log("Test One");
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    console.log("Secret Test");
    console.log("Test Two");

    res.status(200).json(newComment);
    console.log("Test Three");
  } catch (err) {
    res.status(400).json(err);
    console.log("Test Four");
  }
});

module.exports = router;
