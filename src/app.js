const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 
app.use(express.json());
app.use(express.urlencoded())

app.get("/musicians", async (req, res) =>{
    const musicians = await Musician.findAll({});
    res.json(musicians);
});

app.get("/musicians/:id", async (req, res) =>{
    const artistId = await Musician.findByPk(req.params.id);
    res.json(artistId);
});

app.post("/musicians", async (req, res) => {
    const newArtist = await Musician.create(req.body);
    res.json(newArtist);
});


app.put("/musicians/:id", async(req, res) => {
    const user = await Musician.findByPk(req.params.id);
    const updatedUser = await user.update(req.body);
    res.json(updatedUser);
});

app.delete("/musicians/:id", async(req, res) =>{
   const user = await Musician.findByPk(req.params.id);
   const delArtist = await user.destroy(req.body)
   res.json(delArtist);
});




module.exports = app;