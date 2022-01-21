var html_kayak = document.querySelector("#gamezone img");
var html_kayak_counter = document.querySelector("#kayak");
var html_boost = document.querySelector("#boost");
var html_boost_price = document.querySelector("#booster-price");

var nbKayak = 0;
var boostPrice = 10;
var kayakPerClick = 1;

html_kayak.addEventListener("click", function() {
  nbKayak = nbKayak + kayakPerClick;
  html_kayak_counter.textContent = nbKayak;
});

html_boost.addEventListener("click", function() {
  if (nbKayak >= boostPrice) {
    nbKayak = nbKayak - boostPrice;
    html_kayak_counter.textContent = nbKayak;
    kayakPerClick++;
    boostPrice = boostPrice * 5;
    html_boost_price.textContent = boostPrice;
  } else {
    alert("Pas assez de kayak ! Déso");
  }
});