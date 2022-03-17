var Quiz = require("../models/quizModel");

let prueba = { "question": "uno", "id": "dos", "value": "tres", "answer": "cuatro" };



exports.uploadQuizData = function (req, res) {
    var quiz = new Quiz(req.body);
    quiz.save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

exports.getAllQuizData = function(req, res) {
    Quiz.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
}
