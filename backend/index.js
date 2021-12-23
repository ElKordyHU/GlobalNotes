const { request } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const utils = require('./utils.js')

const app = express()
app.use(express.json());
utils.connectDB(process.argv[2],process.argv[3]);

app.post("/notes",(request,response) => {
    utils.addNote(request.body.content,() => {response.sendStatus(200)}, (err) => {response.sendStatus(400)});
});
app.get("/notes/:id",(request,response) => {
    const limnum = (request.params.id);
    utils.getnNotes(parseInt(limnum),(res) => response.json(res) , (err) => response.sendStatus(400));
});
const PORT = 3001
app.listen(PORT,() => {console.log("[*] server started working " );});