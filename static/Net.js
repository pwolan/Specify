$(document).ready(() => {
  console.log("asd");
  $.ajax({
    url: "/",
    data: {
      action: "FIRST"
    },
    type: "POST",
    success: function(data) {
      console.log(data);
    },
    error: function(xhr, status, error) {
      console.log(xhr);
    }
  });
});
