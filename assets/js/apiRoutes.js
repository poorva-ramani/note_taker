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
      dbData.push(req.body);
      res.json(true);
  });

//   app.delete("/api/notes/:id", function(req, res) {
//     dbData.push(req.body);
//     res.json(true);
// });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

//   app.post("/api/clear", function(req, res) {
//     // Empty out the arrays of data
//     tableData.length = 0;
//     waitListData.length = 0;

//     res.json({ ok: true });
//   });
 };
