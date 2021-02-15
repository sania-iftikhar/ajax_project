$(document).ready(function () {
  $.ajaxSetup({ cache: false });
  $("#search").keyup(function () {
    $("#result").html("");
    $("#state").val("");
    let searchField = $("#search").val();
    let expression = new RegExp(searchField, "i");
    $.getJSON("data.json", function (data) {
      $.each(data, function (key, value) {
        if (
          value.name.search(expression) != -1 ||
          value.location.search(expression) != -1
        ) {
          $("#result").append(
            '<li class="list-group-item link-class"> '+
              value.name +
              ' | <span class="text-muted">' +
              value.address +
              ' | <span class="text-muted">' +
              value.location +
              "</span></li>"
          );
        }
      });
    });
  });

  $("#result").on("click", "li", function () {
    let click_text = $(this).text().split("|");
    $("#search").val($.trim(click_text[0]));
    $("#result").html("");
  });
});
