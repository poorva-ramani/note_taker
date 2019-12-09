// ===============================================================================
// LOAD DATA
// ===============================================================================
var fs = require("fs");
var dbData = require("../db/db.json");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  app.get("/api/notes", function (req, res) {
    res.json(dbData);
  });

  // API POST Requests
  app.post("/api/notes", function (req, res) {
    const newNote = {
      id: dbData.length + 1,
      title: req.body.title,
      text: req.body.text
    };
    dbData.push(newNote);
    res.json(dbData);
  });

  // API DELETE Requests
  app.delete("/api/notes/:id", function (req, res) {
    const reqId = req.params.id;
    let note = dbData.filter(note => {
      return note.id == reqId;
    })[0];
    const index = dbData.indexOf(note);
    dbData.splice(index, 1);
    for (var i = index; i < dbData.length; i++) {
      dbData[i].id--;
    }
  //  console.log(dbData)
    res.json(dbData);
  });
}