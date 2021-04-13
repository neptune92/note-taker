const fs = require("fs");


module.exports = (app) => {

    let notes = require("../db/db.json");

    app.get("/api/notes", (req, res) => {
        res.json(notes);
    });

    app.post("/api/notes", (req, res) => {
        let newNote = req.body;
        console.log(newNote);
        notes.push(newNotes);
        res.json(newNote);
    });


    app.get("/api/notes/:id", (req, res) => {
        const noteTaken = req.params.id
    console.log(noteTaken);

    for (let i = 0; i < id.length; i++) {
        if (noteTaken === id[i].notes) {
          return res.json(id[i]);
        }
      }
    
      return res.json(false);
});
    


app.delete("/api/notes/:id", (req, res) => {
    notes.splice(req.params.id, 1);
});


};




