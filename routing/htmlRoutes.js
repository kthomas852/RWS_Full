var path = require('path');

module.exports = function(app){
app.get("/", function(req, res){
    console.log(__dirname, "/../index.html");
    res.sendFile(path.join(__dirname, "/../index.html"));
});
};
//catch all route that leads back to home.html