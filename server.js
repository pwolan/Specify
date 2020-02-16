const http = require("http");
const fs = require("fs");
const qs = require("querystring");
const readFile = require("./readFile");

let albumsImg = [];
http
  .createServer((req, res) => {
    switch (req.method) {
      case "GET":
        readFile(req, res);
        albumsImg.forEach(album => {
          if (req.url == `/${album}/okladka.jpg`) {
            fs.readFile(`static/mp3/${decodeURIComponent(album)}/okladka.jpg`, (error, data) => {
              res.writeHead(200, {
                "Content-Type": "image/jpg"
              });
              res.write(data);
              res.end();
            });
          }
        });
        break;
      case "POST":
        // if (req.url == '/albums')
        albumsRequest(req, res);
        break;

      default:
        break;
    }
  })
  .listen("3000", () => console.log("Start na 3000"));

function albumsRequest(req, res) {
  let postData = "";
  req.on("data", data => {
    postData += data;
  });
  req.on("end", data => {
    data = qs.parse(postData);

    let toSend = {};
    fs.readdir(`${__dirname}/static/mp3`, function(err, folders) {
      // czytanie folderów - albumów
      if (err) {
        return console.log(err);
      }
      let albumsList = [...folders];

      //czytanie plików
      if (data.action == "FIRST") {
        let albumSongs = fs.readdirSync(`${__dirname}/static/mp3/${albumsList[0]}`);
        let filesList = albumSongs.map(song => ({ file: song }));

        toSend.files = filesList;

        //stworzenie getów dla okladek
        albumsList = albumsList.map(album => encodeURIComponent(album));
        albumsImg = [...albumsList];
        toSend.dirs = albumsList;

        res.end(JSON.stringify(toSend));
      } else if (data.action == "SECOND") {
        console.log(data);
        let album = decodeURIComponent(data.album);

        let albumSongs = fs.readdirSync(`${__dirname}/static/mp3/${album}`);
        let filesList = albumSongs.map(song => ({ file: song }));

        toSend.files = filesList;
        toSend.album = album;
        res.end(JSON.stringify(toSend));
      }
    });
  });
}
