var express = require("express");
var router = express.Router();
var quizController = require("../controllers/quizController");
var loginController = require('../controllers/loginController');

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/create", quizController.uploadQuizData);

router.get("/getAllData", quizController.getAllQuizData);

router.get("/user", loginController.getUserData)

module.exports = router;
