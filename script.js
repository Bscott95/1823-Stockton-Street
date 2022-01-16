
var show = document.querySelector("#generate");

function showCoffees() {
    var a = document.getElementById("CoffeeMenu");
    var b = document.getElementById("CocktailMenu")
    var c = document.getElementById("MixingSyrups")
    if (a.style.display === "none") {
      b.style.display = "none";
      c.style.display = "none";
      a.style.display = "block";
    } else {
      a.style.display = "block";
    }
}

function showCocktails() {
  var a = document.getElementById("CocktailMenu");
  var b = document.getElementById("CoffeeMenu")
  var c = document.getElementById("MixingSyrups")
  if (a.style.display === "none") {
    b.style.display = "none";
    c.style.display = "none";
    a.style.display = "block";
  } else {
    a.style.display = "block";
  }
}

function showMixingSyrups() {
  var a = document.getElementById("MixingSyrups");
  var b = document.getElementById("CoffeeMenu")
  var c = document.getElementById("CocktailMenu")
  if (a.style.display === "none") {
    b.style.display = "none";
    c.style.display = "none";
    a.style.display = "block";
  } else {
    a.style.display = "block";
  }
}