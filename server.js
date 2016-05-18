const express = require('express'); 
// express is a libaray ontop of node that is like a shorthand
const path = require('path');
const publicPath = path.resolve(__dirname);
const app= express();

app.get('/', function(req, res){
  res.sendFile(publicPath + '\\index.html');
})

app.listen(3000, function(){
  console.log('Server is running');
});

