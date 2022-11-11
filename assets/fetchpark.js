// api key stored in a variable
const apiKey = 'rvX9bJoyPEXTv5dRShhVJwdVf4vkUjRX1Odiws42';

// varibles for milage radius
let tenMiles = document.getElementById('10-miles');
let twentyFiveMiles = document.getElementById('25-miles');
let fiftyMiles = document.getElementById('50-miles');
let hundredMiles = document.getElementById('100-miles');

// variables for activities
let camping = document.getElementById('camping');
let fishing = document.getElementById('fishing');
let boating = document.getElementById('boating');
let starGazing = document.getElementById('stargazing');
let hiking = document.getElementById('hiking');
let kayaking = document.getElementById('kayaking');
let swimming = document.getElementById('swimming');

// variables for enttrance fee
let zeroDollars = document.getElementById('zero-dollars');
let fifteenDollars = document.getElementById('fifteen-dollars');
let thirtyDollars = document.getElementById('thirty-dollars');
let fiftyDollars = document.getElementById('fifty-dollars');

fetch('https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=' + apiKey)
    .then(function(resposne) {
        return resposne.json()
    })
    .then(function(data) {
        console.log(data)
        // if statements for milage radius
        if(tenMiles) {
            
        }
        if(twentyFiveMiles) {

        }
        if(fiftyMiles) {

        }
        if(hundredMiles) {

        }
        // if statements for activities
        if(camping) {
            
        }
        if(fishing) {

        }
        if(boating) {

        }
        if(starGazing) {

        }
        if(hiking) {

        }
        if(kayaking) {

        }
        if(swimming) {

        }
        // if statements for entrance fees
        if(zeroDollars) {
            
        }
        if(fifteenDollars) {

        }
        if(thirtyDollars) {

        }
        if(fiftyDollars) {

        }
    })