

$("button").on("click", function() {
    var art = $(this).attr("data-martial_art");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=art&api_key=JF5CZKNNpE0qqubYfpQhRgWj12aPWkiv&limit=10";

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
           var artImage = $("<img>");
           artImage.attr("src", results[i].images.fixed_height.url);
            divTag.prepend(pTag);
            divTag.prepend(artImage);
            $("#gifs-appear-here").prepend(divTag);

        }
        console.log(ratData);

      });
    });