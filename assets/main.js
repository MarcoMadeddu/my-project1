
var buttonBio = $(".show");
var meetBio = $(".biop");
var sectMeet = $(".meet");

buttonBio.click(function(){
  meetBio.toggleClass("op1");
  sectMeet.css({
    "background-color" : "#fdf9ba"
  });
});


var buttonJumbo = $(".jumbo-button");
var jumboRight = $(".jumbotron-right");
var jumboText = $(".text");

buttonJumbo.click(function(){
  jumboRight.toggleClass("spar");
  jumboText.toggleClass("op1");
})
