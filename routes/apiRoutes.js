//dependencies
const db = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");


module.exports = function(app) {

  // data GET requests
  //   app.get("/notes", function(req, res) {
  //     console.log('you Get /notes')
  //     return res.json(db);
  //   });
  

  //  app.get("/", function(req, res) {
  //    console.log("you GET")
  //      res.json(path.join(__dirname, "public/index.html"));
  //   });


  //routing 

    app.get("/api/", function (req, res) {
      console.log("you GET /api/")
      res.json(index);
    });

      app.get("/api/notes", function(req, res) {
        console.log("you GET /api/notes")
        res.json(db);
      });


//function to reload the databse 
      function reloadDataBase() {
        fs.writeFile("./db/db.json", JSON.stringify(db), function (err) {
          if (err) throw err;
          return true;
        });
      }

// posts the new note
app.post("/api/notes", (req, res) => {
  let addNote = req.body;
  addNote.id = uuidv4();
  db.push(addNote);
  res.json(addNote);
console.log ('note saved!')
  reloadDataBase();
});

// deletes notes


}

