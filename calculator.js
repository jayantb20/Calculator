// hint esversion:6
const express = require("express");
const app = express();

app.get('/', (req,res) => {
  res.send("<ul><li>first</li><li>second</li></ul>")
});


app.listen(3000, ()=>{console.log("serer is running on port 3000")});
