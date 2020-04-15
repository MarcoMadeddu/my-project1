/* N A V B A R */
var buttonBio = $(".show");
var meetBio = $(".biop");
var sectMeet = $(".meet");

buttonBio.click(function(){
  meetBio.toggleClass("op1");
  sectMeet.css({
    "background-color" : "#fdf9ba"
  });
});

/* J U M B O T R O N */
var buttonJumbo = $(".jumbo-button");
var jumboRight = $(".jumbotron-right");
var jumboText = $(".text");

buttonJumbo.click(function(){
  jumboText.toggleClass("op1");
  jumboRight.toggleClass("spar");
})

/* C L I E N T  S E C T I O N */
var imgCentral = $(".dist");
var title = $(".desc > h2");
var textShow = $(".lorem");

title.click(function(){
    textShow.toggleClass("dio");
  imgCentral.toggleClass("animation");

});
