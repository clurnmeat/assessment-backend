const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());

app.use(express.json());

// controllers

const {
  getCompliment,
  getFortune,
  getDesire,
  addDog,
  addCat,
  presentName,
  deleteAccount,
} = require("./user-contoller");

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.put("/api/:desireBox", getDesire);

app.put("/api/dog/:count", addDog);

app.put("/api/cat/:count", addCat)

app.post("/api/:name", presentName)

app.delete("/api/:account", deleteAccount)

// server-up
app.listen(4000, () => console.log("Server running on 4000"));
app.setMaxListeners(20);
