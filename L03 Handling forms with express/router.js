const express = require("express");
const router = express.Router();

const { getCV } = require("./controllers/CvController");
const { createCV } = require("./controllers/CvController");

const fs = require("fs");


router.get("/createCV", (req,res) => {
  res.render('createCV');
});
router.post("/createCV", getCV);

module.exports = router;
