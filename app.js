var express = require("express");
var multer = require('multer');
var fs = require('fs');
var fse = require('fs-extra');
var mkdirp = require('mkdirp');
var bodyParser = require("body-parser");
var childProcess = require('child_process');


var app = express();
app.use(bodyParser.urlencoded({
    extended: true

}))

app.use(bodyParser.json());
app.use(express.static(__dirname));



app.get('/', (req, res) => {

    res.sendFile(__dirname + "/index.html");


});
app.post('/lastPlayed', (req, res) => {

    fs.readFile("data/directory.txt", function(err, data) {
        if (err)
            console.log(err)
        else
            console.log(data.toString());
        directory = __dirname + data.toString()
        gamePlayed = req.body
        gameName = gamePlayed.game.file.replace(/ /g, '\\ ').replace(/\(/g, "\\(").replace(/\)/g, "\\)")

        gameName = gameName.replace(/\\\\/g, "\\")
        gameName = gameName.replace(/\\\\/g, "\\")
        execute = "open -a Dolphin -e " + directory + gameName


        childProcess.exec(execute, function(err, stdout, stderr) {
            if (err) {
                console.error(err);
                return;
            }

        })
        process.argv.forEach(function(val, index, array) {
        });



        pathToTheFile = "data/lastPlayed.json"

        let lastPlayedGames = [];
        console.log(lastPlayedGames)
        fs.readFile(pathToTheFile, (err, data) => { // get the data from the file
            if (data != '') {
                lastPlayedGames = JSON.parse(data);
            }
            lastPlayedGames.push(gamePlayed);
            fs.writeFile(pathToTheFile, JSON.stringify(lastPlayedGames), (err) => {
                console.log(err);
            });
        });

    });
});

const backupGamesFolder = './backup_games/';
availableGames = "data/gameDirectory.json"
let directory = [];

fs.readdir(backupGamesFolder, (err, files) => {
    files.forEach(file => {
        game = {
                name: file
            }
        directory.push(game);
        fs.writeFile(availableGames, JSON.stringify(""), (err) => {
            fs.writeFile(availableGames, JSON.stringify(directory), (err) => {
                console.log(err);
            });
        });


    });
});


// start server on port 3210
app.listen(3210);