//NavBar functionality
var prev = 0;
var $window = $(window);
var nav = $('.scrollhide-nav');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('hidden', scrollTop > prev);
  prev = scrollTop;
});

var park1 = JSON.parse(localStorage.getItem('park1'));
console.log('this is park 1:' + park1);