var express = require('express');
var bodyParser = require('body-parser');
// may not need ALL these requires

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require("./routing/htmlRoutes")(app);
require("./routing/apiRoutes")(app);
require("./routing/app")(app);

app.listen(PORT, function(){
    console.log("ActCasual now Listening on PORT " + PORT);
});