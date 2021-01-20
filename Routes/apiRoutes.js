//dependencies
var NotesData = require("../data/NotesData");


module.exports = function(app) {

  // data GET requests
    app.get("/notes", function(req, res) {
      return res.json(NotesData);
    });
  

   app.get("/", function(req, res) {
       res.json(path.join(__dirname, "public/index.html"));
    });

// posts the new note
    app.post("/notes", function(req, res) {
        let newNote=req.body;
        NotesData.push(newNote);
        updateDB();
        return console.log("Added new note." + newNote)
    });

// deletes notes
    router.delete("/notes/:id", function (req, res){
        NotesData.splice(req.params.id, 1)
        updatedbfile();
    });
  }