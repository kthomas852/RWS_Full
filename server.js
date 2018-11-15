var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// may not need ALL these requires

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

require("./routing/htmlRoutes")(app);
require("./routing/apiRoutes")(app);

app.listen(PORT, function(){
    console.log("RWS Project now Listening on PORT " + PORT);
});