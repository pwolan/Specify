class Net {
  constructor() {
    this.a = 100; // użycie zmiennych
    this.b = 200;
    console.log("konstruktor klasy Net");
    this.doSth(); // wywołanie funkcji z tej samej klasy
  }

  doSth() {
    console.log("funcja doSth " + this.a + " - " + this.b);
  }

  sendData(album) {
    console.log("zmiana!");
    console.log(album);
    $.ajax({
      url: "/",
      data: {
        action: "SECOND",
        album
      },
      type: "POST",
      success: function(response) {
        let { files, album } = JSON.parse(response);
        ui.render(files, album);
      },
      error: function(xhr, status, error) {
        console.log(xhr);
      }
    });
  }
}
