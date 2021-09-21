// hint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', (req,res) => {
  res.sendfile(__dirname + "/index.html");
});

app.post('/', (req,res) => {

  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  var result = num1 + num2;
  res.send("the sum of the 2 inputs is: " + result);
  }
);


app.listen(3000, ()=>{console.log("serer is running on port 3000")});
