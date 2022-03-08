const express = require("express");
const { json } = require("express/lib/response");
const Database = require("nedb");
const app = express();
const port = 8000;

const db = new Database("Database.db");
db.loadDatabase();
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));
app.listen(port, () => {
  console.log(`server is up at the port ${port}`);
});

app.get("/display", (req, res) => {
  db.find({}, (err, data) => {
    res.json(data);
  });

  //   res.json({ test: 132 });
});
app.post(
  "/api",
  (req, res) => {
    console.log(req.body);
    res.send({ log: req.body.lon, lat: req.body.lat, status: "success" });
    //adding the time stamp when did the data come
    req.body.timestamp = Date.now();
    db.insert(req.body);
  },
  (err) => {
    console.log("sorry can not receive the data");
  }
);
