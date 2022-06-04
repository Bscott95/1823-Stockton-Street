
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

let $rating = document.querySelector(".rate")
let ratingValue = 2;
$rating.append(`<p>hello ${ratingValue}</p>`)


// var rating = document.createElement("div")

// output.push(
//   `<div class = "slide">
//       <div class="question"> ${currentQuestion.question} </div>
//       <div class="answers"> ${answers.join('')} </div>
//   </div>`
// ); 

// $quiz.innerHTML 


// document.addEventListener('DOMContentLoaded', function(){
//   let dots = document.querySelectorAll('.dot');
//   dots.forEach(function(dot){
//       dot.addEventListener('click', setRating); 
//   });
  
//   let rating = parseInt(document.querySelector('.dots').getAttribute('data-rating'));
//   let target = dots[rating - 1];
//   target.dispatchEvent(new MouseEvent('click'));
// });

// function setRating(ev){
//   let span = ev.currentTarget;
//   let dots = document.querySelectorAll('.dot');
//   let match = false;
//   let num = 0;
//   dots.forEach(function(dot, index){
//       if(match){
//           dot.classList.remove('rated');
//       }else{
//           dot.classList.add('rated');
//       }
//       //are we currently looking at the span that was clicked
//       if(dot === span){
//           match = true;
//           num = index + 1;
//       }
//   });
//   document.querySelector('.dots').setAttribute('data-rating', num);
// }