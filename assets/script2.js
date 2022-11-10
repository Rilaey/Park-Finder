// functionallity for nav bar
var prev = 0;
var $window = $(window);
var nav = $('.scrollhide-nav');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('hidden', scrollTop > prev);
  prev = scrollTop;
});

// fetch api request for parks api
function callApi() {
  fetch('https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=rvX9bJoyPEXTv5dRShhVJwdVf4vkUjRX1Odiws42')
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    console.log(data)
  })
}

callApi()