var Login = require("../models/loginModel");

exports.getUserData = function(req, res) {
    console.log('params',req.params)
    console.log('query',req.query)
    console.log('body',req.body)
    const email = req.query.email;
    const password = req.query.password;
    console.log(email)
    console.log(password)
    Login.find().where({email:email,password:password})
    .then((result) => {
    //   console.log("se hizo la vaina");
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
}
