onEvent("cubanBoatImage", "click", function( ) {
  setScreen("cubanBoat");
});
onEvent("cubanBoatCalculate", "click", function( ) {
  setText("maxAnswer", 50 * (300 / 25));
  setText("minAnswer", 5 * (300 / 25));
});
onEvent("cubanBoatHome", "click", function( ) {
  setScreen("Home");
});
onEvent("next", "click", function( ) {
  setScreen("mediterraneanSituation");
});
onEvent("mediterrenianImage", "click", function( ) {
  setScreen("mediterraneanSituation");
});
onEvent("next", "click", function( ) {
  setScreen("mediterraneanSituation");
});
onEvent("mediterraneanReadMore", "click", function( ) {
  open("https://data2.unhcr.org/en/situations/mediterranean");
});
onEvent("nextMediterraneanSituation", "click", function( ) {
  setScreen("usNavy");
});
onEvent("headBackHome", "click", function( ) {
  open("https://docs.google.com/document/d/1BHTFZEvDWJ86aN-PQOxzEnkBL0tE7b029-pXSo71F-g/edit#");
});
onEvent("readMoreNavy", "click", function( ) {
  open("https://www.latimes.com/archives/la-xpm-1993-12-09-mn-65516-story.html");
});
onEvent("homeButtonNavy", "click", function( ) {
  setScreen("Home");
});
onEvent("setUpTheProblem", "change", function(event) {
  if (getNumber("setUpTheProblem") == 10) {
    setText("setUpTheProblem", "Yes!");
  } else {
    setText("setUpTheProblem", "No.");
  }
});
onEvent("usNavyWomen", "click", function( ) {
  setScreen("usNavy");
});
onEvent("homeMed", "click", function( ) {
  setScreen("Home");
});
onEvent("tryAgain", "click", function( ) {
  setScreen("usNavy");
});
