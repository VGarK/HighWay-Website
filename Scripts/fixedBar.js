window.onscroll = function() {myFunction()};

var header = document.getElementById("bestHeader");
var static_bar = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > static_bar) {
    header.classList.add("static_bar");
  } else {
    header.classList.remove("static_bar");
  }
}