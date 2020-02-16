class Ui {
  constructor() {
    console.log("konstruktor klasy Ui");
    net.doSth(); // wywołanie funkcji z innej klasy
    this.clicks();
  }

  render(files, album) {
    let table = $("<table>");
    files.forEach(file => {
      let tr = $("<tr>");
      let td1 = $("<td>").text(decodeURIComponent(album));
      let td2 = $("<td>").text(file.file);
      tr.append(td1);
      tr.append(td2);
      table.append(tr);
    });
    $("#songList")
      .empty()
      .append(table);
  }
  renderAlbums(albums) {
    console.log(albums);
    albums.forEach(album => {
      $("#albumList").append(
        $("<img>")
          .attr("src", `${album}/okladka.jpg`)
          .addClass("cover")
          .attr("data-album", album)
      );
    });
    // ;
  }
  //obsługa kliknięć w Ui

  clicks() {
    $("#div1").click(function() {
      net.sendData();
    });
    $(".cover").on("click", e => {
      const albumName = e.target.dataset.album;
      console.log(e.target.dataset.album);
      net.sendData(albumName);
    });
  }
}
