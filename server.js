const express = require("express")
const app = express()
const multer = require('multer')
var upload = multer({ dest: 'uploads/' })

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 8080

app.post('/upload', upload.single('aFile'), function (req, res, next) {
    res.status(200).send({
        "size": req.file.size
    })
})

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
    //__dirname : It will resolve to your project folder.
})
    .listen(port, () => {
        console.log(`Listening on port ${port}`)
    })


