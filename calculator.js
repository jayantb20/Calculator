// hint esversion:6
const express = require("express");
const app = express();

app.get('/', (req,res) => {
  res.send("")
});


app.listen(3000, ()=>{console.log("serer is running on port 3000")});
