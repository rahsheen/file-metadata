const express = require("express")
const app = express()
const multer = require('multer')
var upload = multer({ dest: 'uploads/' })
var path    = require("path");

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 8080

app.post('/upload', upload.single('theFile'), function (req, res, next) {
    res.status(200).send({
        "size": req.file.size
    })
})

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))})
    .listen(port, () => {
        console.log(`Listening on port ${port}`)
    })


