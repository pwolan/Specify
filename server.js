const http = require('http')
const fs = require('fs')
const qs = require('querystring')
const readFile = require('./readFile')

http.createServer((req, res) => {
    switch (req.method) {
        case "GET":
            readFile(req, res)
            break;
        case "POST":
            // if (req.url == '/albums')
            albumsRequest(req, res)
            break;

        default:
            break;
    }

}).listen("3000", () => console.log("Start na 3000"))


function albumsRequest(req, res) {
    let postData = ''
    req.on("data", data => {
        postData += data
    })
    req.on("end", (data) => {
        data = qs.parse(postData)


        let toSend = {}
        fs.readdir(`${__dirname}/static/mp3`, function (err, files) {
            if (err) {
                return console.log(err);
            }
            let albumsList = []

            //czytanie folderów
            files.forEach(function (folder) {
                console.log(folder);
                albumsList.push(folder)
            });
            console.log(albumsList);
            toSend.dirs = albumsList

            let filesList = []
            //czytanie plików
            albumsList.forEach(album => {
                fs.readdir(`${__dirname}/static/mp3/${album}`, function (err, files) {
                    if (err) {
                        return console.log(err);
                    }
                    files.forEach(function (file) {
                        console.log(file);
                        filesList.push({
                            file
                        })
                    });
                })
            })
            toSend.files = filesList


            res.end(JSON.stringify(toSend))
        })



    });
}