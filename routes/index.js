var express = require("express");
const Taco = require("../models/Tacos.model");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// Did you add mongoose to app.js??
// Did you mongoose connect in app.js??
// Did you add the model const to this file?

// Pushes to the postman and allows us to add data
router.post("/add-tacos", function (req, res, next) {
  Taco.create({
    shell: req.body.shell,
    protein: req.body.protein,
    spiceLevel: req.body.spiceLevel,
  })
    .then((results) => {
      console.log("Done", results);
      res.render("add-tacos", {
        shell: results.shell,
        protein: results.protein,
        spiceLevel: results.spiceLevel,
      });
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
});

router.get("/all-tacos", function (req, res, next) {
  Taco.find().then((results) => {
    res.render("all-tacos", {
      tacos: results,
    });
  });
});

module.exports = router;
