var net;
var ui;

$(document).ready(function() {
  net = new Net(); // utworzenie obiektu klasy Net
  ui = new Ui(); // utworzenie obiektu klasy Ui

  $.ajax({
    url: "/",
    data: {
      action: "FIRST"
    },
    type: "POST",
    success: function(respoonse) {
      let { files, dirs } = JSON.parse(respoonse);
      ui.render(files, dirs[0]);
      ui.renderAlbums(dirs);
      ui.clicks();
    },
    error: function(xhr, status, error) {
      console.log(xhr);
    }
  });
});
