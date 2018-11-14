//API Routes
//GET Route with the url /api/friends.  Displays JSON of possible friends
module.exports = function(app){
app.get("/api/friends", function(req, res) {
    return res.json(friends);
});

app.post("/echo/json", function(req, res){
    let post = req.body;
    console.log("Server Hit");
    return res.json(post);
})
};
//POST Route with the url /api/friends handles incoming surveys
//This route will also handle the compatibility logic
