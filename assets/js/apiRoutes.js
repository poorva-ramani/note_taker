// ===============================================================================
// LOAD DATA
// ===============================================================================
var fs = require("fs");
var dbData = require("../db/db.json");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  app.get("/api/notes", function(req, res) {
    res.json(dbData);  
  });

  // API POST Requests
  app.post("/api/notes", function(req, res) {
      const newNote = {
       id: dbData.length+1,
       title: req.body.title,
       text: req.body.text
      };
      dbData.push(newNote);
      res.json(dbData);
      console.log(dbData)
  });

  app.delete("/api/notes/:id", function(req, res) {
    const reqId = req.params.id;
    let note = dbData.filter(note => {
      return note.id == reqId;
    })[0];
    const index = dbData.indexOf(note);
    dbData.splice(index,1);
    for(var i=index;i<dbData.length;i++){
      dbData[i].id--;
    }  
   console.log(dbData)
res.json(dbData);
 });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

//   app.post("/api/clear", function(req, res) {
//     // Empty out the arrays of data
//     tableData.length = 0;
//     waitListData.length = 0;

//     res.json({ ok: true });
//   });
 }