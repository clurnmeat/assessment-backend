const express = require("express");
const cors = require("cors");

const app = express();


// middleware 
app.use(cors());

app.use(express.json());



// controllers

const { getCompliment, getFortune, getDesire  } = require("./user-controller");

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.put("/api/:desireBox", getDesire);






// server-up
app.listen(4000, () => console.log("Server running on 4000"));
app.setMaxListeners(20)
