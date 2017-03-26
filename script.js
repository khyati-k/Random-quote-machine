
    $(document).ready(function() {
  function getQuote() {
    $.ajax({
      type: 'get',
      datatype: 'json',
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',

      headers: {
        "X-Mashape-Key": "ilX7bp1bnAmsh0TfuhpZb69Jcfypp1vun2qjsnG4K7Wn7Q1EjO"

      },
      
      success: function(a) {
        console.log(a);

        var html = "";
        html = JSON.parse(a);
        $("#quote-box").html(html.quote + "<br><br> -" + html.author);
        $("#tweet").attr("href", function() {
          return "https://twitter.com/intent/tweet?text=" + '\"' + html.quote + '\" ' + html.author;

        });
      },
      error: function() {
        $("#quote-box").html("error");

      }

    });

  }
  
  getQuote();

  $("#quoteNew").on("click", function() {
    getQuote();
  });

  
});
