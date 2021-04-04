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

    app.use(express.static("public"));

// posts the new note
app.post("/api/notes", function(req, res) {

  let noteId = uuid();
  let newNote = {
    id: noteId,
    title: req.body.title,
    text: req.body.text
  };

  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) throw err;

    const allNotes = JSON.parse(data);

    allNotes.push(newNote);

    fs.writeFile("./db/db.json", JSON.stringify(allNotes, null, 2), err => {
      if (err) throw err;
      res.send(db);
      console.log("Note created!")
    });
  });
});

// deletes notes
    
}