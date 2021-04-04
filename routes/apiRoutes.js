const db = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");


//dependencies


module.exports = function(app) {

  // data GET requests
    app.get("/notes", function(req, res) {
      return res.json(NotesData);
    });
  

   app.get("/", function(req, res) {
       res.json(path.join(__dirname, "public/index.html"));
    });

    app.get("/api/", function (req, res) {
      res.json(index);
    });

      app.get("/api/notes", function(req, res) {
        res.json(db);
      });


// posts the new note
app.post("/api/notes", function (req, res) {
  var newNote = req.body;
  newNote.id = uuidv4();
  db.push(newNote);
  res.json(newNote);
console.log ('note saved!')
  refreshDB();
});

// deletes notes
    
}

function refreshDB() {
  fs.writeFile("./db/db.json", JSON.stringify(db), function (err) {
    if (err) throw err;
    return true;
  });
}