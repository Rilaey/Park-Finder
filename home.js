// api key stored in a variable
const apiKey = 'rvX9bJoyPEXTv5dRShhVJwdVf4vkUjRX1Odiws42';

let npsUrl = 'https://developer.nps.gov/api/v1/parks?limit=500&api_key=' + apiKey;

//Variables for the featured map

    //Container for the map and featured picture
let featuredBox1 = document.getElementById('featuredBox1');
let featuredBox2 = document.getElementById('featuredBox2');
let featuredBox3 = document.getElementById('featuredBox3');

    //Container for the featured picture
let featuredPark1 = document.getElementById('featurePark1');
let featuredPark2 = document.getElementById('featurePark2');
let featuredPark3 = document.getElementById('featurePark3');


//Loads this function when the page is ready
$(document).ready(function() {

    fetch(npsUrl).then(function (response) {
        return response.json();
    }).then(function (response) {
        console.log(response);


        // Choose a random number less than the length of the results
        var random = Math.floor(Math.random() * response.data.length);
        var randomPark = response.data[random];
        

        // Set the featured park title, image, and description and show the result in the card
        $('#featured1').text(randomPark.fullName);
        $('#img1').attr('src', randomPark.images[0].url);

        globalThis.park1 = randomPark;
        // globalThis.park1lat = randomPark.latitude;
        // globalThis.park1lng= randomPark.longitude;

        var random = Math.floor(Math.random() * response.data.length);
        var randomPark = response.data[random];

        // Set the featured park title, image, and description and show the result in the card
        $('#featured2').text(randomPark.fullName);
        $('#img2').attr('src', randomPark.images[0].url);

        globalThis.park2 = randomPark;
        // globalThis.park2lat = randomPark.latitude;
        // globalThis.park2lng= randomPark.longitude;

        var random = Math.floor(Math.random() * response.data.length);
        var randomPark = response.data[random];

        // Set the featured park title, image, and description and show the result in the card
        $('#featured3').text(randomPark.fullName);
        $('#img3').attr('src', randomPark.images[0].url);

        globalThis.park3 = randomPark;
        // globalThis.park3lat = randomPark.latitude;
        // globalThis.park3lng= randomPark.longitude;

    });



})

function mapLoad1() {
    console.log('Lets see the featured Map!');
    featuredPark1.classList.add("invisible");

    var options = {
        zoom: 8,
        center: { lat: Number(park1.latitude), lng: Number(park1.longitude) }
    }
    var map = new google.maps.Map(document.getElementById('featureMap1'), options);

    new google.maps.Marker({
        position: options,
        map: map,
        title: park1.fullName,
    });
    console.log("Map loading is working!");
    console.log('This is the coords: ' + Number(park1.latitude))
}

function mapLoad2() {
    console.log('Lets see the featured Map!');
    featuredPark2.classList.add("invisible");

    var options = {
        zoom: 8,
        center: { lat: Number(park2.latitude), lng: Number(park2.longitude) }
    }
    var map = new google.maps.Map(document.getElementById('featureMap2'), options);

    new google.maps.Marker({
        position: options,
        map: map,
        title: park2.fullName,
    });
    console.log("Map loading is working!");
    console.log('This is the coords: ' + Number(park2.latitude))
}

function mapLoad3() {
    console.log('Lets see the featured Map!');
    featuredPark3.classList.add("invisible");

    var options = {
        zoom: 8,
        center: { lat: Number(park3.latitude), lng: Number(park3.longitude) }
    }
    var map = new google.maps.Map(document.getElementById('featureMap3'), options);

    new google.maps.Marker({
        position: options,
        map: map,
        title: park3.fullName,
    });
    console.log("Map loading is working!");
    console.log('This is the coords: ' + Number(park3.latitude))
}


