//API Routes
//GET Route with the url /api/friends.  Displays JSON of possible friends
module.exports = function(app){
console.log("Routing!");

app.post("/echo/json/", function(req, res){
    let post = req.body;
    console.log("Server Hit");
    res.json(post);
})
};
//POST Route with the url /api/friends handles incoming surveys
//This route will also handle the compatibility logic
