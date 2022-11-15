// api key stored in a variable
const apiKey = 'rvX9bJoyPEXTv5dRShhVJwdVf4vkUjRX1Odiws42';

let npsUrl = 'https://developer.nps.gov/api/v1/parks?limit=500&api_key=' + apiKey;

$(document).ready(function() {

    fetch(npsUrl).then(function (response) {
        return response.json();
    }).then(function (response) {
        console.log(response);
        // Choose a random number less than the length of the results
        var random = Math.floor(Math.random() * response.data.length);
        var randomPark = response.data[random];
        console.log(randomPark);
        console.log(randomPark.parkCode);

        // Set the featured park title, image, and description and show the result in the card
        $('#featured1').text(randomPark.fullName);
        $('#img1').attr('src', randomPark.images[0].url);
        $('#description1').text(randomPark.description);
        $('#parkCode1').text(randomPark.parkCode);

        var random = Math.floor(Math.random() * response.data.length);
        var randomPark = response.data[random];
        console.log(randomPark);

        globalThis.featured2 = randomPark;

        // Set the featured park title, image, and description and show the result in the card
        $('#featured2').text(randomPark.fullName);
        $('#img2').attr('src', randomPark.images[0].url);
        $('#description2').text(randomPark.description);

        var random = Math.floor(Math.random() * response.data.length);
        var randomPark = response.data[random];
        console.log(randomPark);

        globalThis.featured3 = randomPark;

        // Set the featured park title, image, and description and show the result in the card
        $('#featured3').text(randomPark.fullName);
        $('#img3').attr('src', randomPark.images[0].url);
        $('#description3').text(randomPark.description);
    });
})