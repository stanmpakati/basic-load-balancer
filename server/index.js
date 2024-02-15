const express = require('express');

var app = express();
var port = process.env.PORT || 9898;

app.get('/', (req, res) => {
   res.send("I am served by node");
});


// Start server
app.listen(port, () => {
   console.log('server running at port: ' + port);
});
