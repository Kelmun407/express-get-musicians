const express = require("express");
const musicianRouter = express.Router();
const { Musician } = require("../models/index");


musicianRouter.get("/", async (req, res) =>{
    const musicians = await Musician.findAll({});
    res.json(musicians);
});

musicianRouter.get("/:id", async (req, res) =>{
    const artistId = await Musician.findByPk(req.params.id);
    res.json(artistId);
});

musicianRouter.post("/", async (req, res) => {
    const newArtist = await Musician.create(req.body);
    res.json(newArtist);
});


musicianRouter.put("/:id", async(req, res) => {
    const user = await Musician.findByPk(req.params.id);
    const updatedUser = await user.update(req.body);
    res.json(updatedUser);
});

musicianRouter.delete("/:id", async(req, res) =>{
   const user = await Musician.findByPk(req.params.id);
   const delArtist = await user.destroy(req.body)
   res.json(delArtist);
});



module.exports = musicianRouter;