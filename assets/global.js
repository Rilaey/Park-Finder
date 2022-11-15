//NavBar functionality
var prev = 0;
var $window = $(window);
var nav = $('.scrollhide-nav');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('hidden', scrollTop > prev);
  prev = scrollTop;
});

var featuredCode1 = document.getElementById('parkCode1');
var featuredCode2 = document.getElementById('parkCode2');
var featuredCode3 = document.getElementById('parkCode3');

console.log('this is a test' + featuredCode1);
// var featured2 = featuredCode2.textContent;
// var featured3 = featuredCode3.textContent;

