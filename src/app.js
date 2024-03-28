const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const musicianRouter = require("../routes/routes")
app.use('/musicians', musicianRouter)

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 
app.use(express.json());
app.use(express.urlencoded())





module.exports = app;