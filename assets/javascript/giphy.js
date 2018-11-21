$("button").on("click", function() {
  var art = $(this).attr("data-martial_art");
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    art +
    "&api_key=JF5CZKNNpE0qqubYfpQhRgWj12aPWkiv&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var results = response.data;
    for (var i = 0; i < results.length; i++) {
      var divTag = $("<div>");
      var ratData = results[i].rating;
      var pTag = $("<p>").text("Rating :" + ratData);
      divTag.prepend(pTag);
      var gif = $("<img>");
      gif.attr("src", results[i].images.fixed_height_small_still.url);
      gif.attr("data-state", "still");
      gif.attr("data-still", results[i].images.fixed_height_small_still.url);
      gif.attr("data-animate", results[i].images.fixed_height_small.url);

      divTag.prepend(gif);
      $("#gifs").prepend(divTag);
    }
    console.log();
  });
});
$(document).on("click", "img", function() {
  var state = $(this).attr("data-state");

  if (state === "still") {
    var animatedImg = $(this).attr("data-animate");
    $(this).attr("src", animatedImg);
    $(this).attr("data-state", "animate");
  } else if (state === "animate") {
    var stillImg = $(this).attr("data-still");
    $(this).attr("src", stillImg);
    $(this).attr("data-state", "still");
  }
});
