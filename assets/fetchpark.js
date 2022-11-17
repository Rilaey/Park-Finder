// api key stored in a variable
const apiKey = 'rvX9bJoyPEXTv5dRShhVJwdVf4vkUjRX1Odiws42';

// State variables
const states = [
    { name: 'Alabama', code: 'AL' },
    { name: 'Alaska', code: 'AK' },
    { name: 'Arizona', code: 'AZ' },
    { name: 'Arkansas', code: 'AR' },
    { name: 'California', code: 'CA' },
    { name: 'Colorado', code: 'CO' },
    { name: 'Connecticut', code: 'CT' },
    { name: 'Delaware', code: 'DE' },
    { name: 'Florida', code: 'FL' },
    { name: 'Georgia', code: 'GA' },
    { name: 'Hawaii', code: 'HI' },
    { name: 'Idaho', code: 'ID' },
    { name: 'Illinois', code: 'IL' },
    { name: 'Indiana', code: 'IN' },
    { name: 'Iowa', code: 'IA' },
    { name: 'Kansas', code: 'KS' },
    { name: 'Kentucky', code: 'KY' },
    { name: 'Louisiana', code: 'LA' },
    { name: 'Maine', code: 'ME' },
    { name: 'Maryland', code: 'MD' },
    { name: 'Massachusetts', code: 'MA' },
    { name: 'Michigan', code: 'MI' },
    { name: 'Minnesota', code: 'MN' },
    { name: 'Mississippi', code: 'MS' },
    { name: 'Missouri', code: 'MO' },
    { name: 'Montana', code: 'MT' },
    { name: 'Nebraska', code: 'NE' },
    { name: 'Nevada', code: 'NV' },
    { name: 'New Hampshire', code: 'NH' },
    { name: 'New Jersey', code: 'NJ' },
    { name: 'New Mexico', code: 'NM' },
    { name: 'New York', code: 'NY' },
    { name: 'North Carolina', code: 'NC' },
    { name: 'North Dakota', code: 'ND' },
    { name: 'Ohio', code: 'OH' },
    { name: 'Oklahoma', code: 'OK' },
    { name: 'Oregon', code: 'OR' },
    { name: 'Pennsylvania', code: 'PA' },
    { name: 'Rhode Island', code: 'RI' },
    { name: 'South Carolina', code: 'SC' },
    { name: 'South Dakota', code: 'SD' },
    { name: 'Tennessee', code: 'TN' },
    { name: 'Texas', code: 'TX' },
    { name: 'Utah', code: 'UT' },
    { name: 'Vermont', code: 'VT' },
    { name: 'Virginia', code: 'VA' },
    { name: 'Washington', code: 'WA' },
    { name: 'West Virginia', code: 'WV' },
    { name: 'Wisconsin', code: 'WI' },
    { name: 'Wyoming', code: 'WY' },
];

// Add the default option for states
$('#stateList').append('<option value="">Any State</option>');
// For each state, add an option with the value being its code from API
for (let i = 0; i < states.length; i++) {
    $('#stateList').append('<option value="' + states[i].code + '">' + states[i].name + '</option>');
}

// Activity variables
const activities = [
    { name: 'Camping', value: 'camping' },
    { name: 'Fishing', value: 'fishing' },
    { name: 'Boating', value: 'boating' },
    { name: 'Stargazing', value: 'stargazing' },
    { name: 'Hiking', value: 'hiking' },
    { name: 'Kayaking', value: 'kayaking' },
    { name: 'Swimming', value: 'swimming' },
];


// Add the default option for activities
$('#activitiesList').append('<option value="">Any Activity</option>');
// For each activity, add an option with the value being its value
for (let i = 0; i < activities.length; i++) {
    $('#activitiesList').append('<option value="' + activities[i].value + '">' + activities[i].name + '</option>');
}

// Declare the randomPark variable so that we can use this throughout the whole file MMMMM
let randomPark;
$('#parkSearchForm').submit(function (event) {
    // Do not refresh browser on submit
    event.preventDefault();

    // Get the value from the State and Activity dropdowns
    let stateCode = $('#stateList').val();
    let selectedActivity = $('#activitiesList').val();

    // Building the URL to get national parks with the dropdown filters
    let npsUrl = 'https://developer.nps.gov/api/v1/parks?limit=500&api_key=' + apiKey;
    // If a state is specified, add it to the URL
    if (stateCode !== '') {
        npsUrl = npsUrl + '&stateCode=' + stateCode;
    }
    // If an activity is specified, add it to the URL
    if (selectedActivity !== '') {
        npsUrl = npsUrl + '&q=' + selectedActivity;
    }

    // Fetch the data from NPS API
    console.log(npsUrl);
    fetch(npsUrl).then(function (response) {
        return response.json();
    }).then(function (response) {
        //console.log(response);
        // Choose a random number less than the length of the results
        let random = Math.floor(Math.random() * response.data.length);
        randomPark = response.data[random];
        console.log(randomPark);

        // Set the park title, image, and description and show the result in the card
    
        $('#parkTitle').text(randomPark.fullName);
        $('#parkImage').attr('src', randomPark.images[0].url);
        $('#parkDescription').text(randomPark.description);
        // Show the search results container
        $('.search-results-container').removeClass('invisible');

        // Default options for map loading random park location
        const options = {
            zoom: 8,
            center: { lat: Number(randomPark.latitude), lng: Number(randomPark.longitude) }
        };
        //Map shows location of randomonly generated park and places marker 
        let map = new google.maps.Map(document.getElementById('map'), options);
        new google.maps.Marker({
            position: { lat: Number(randomPark.latitude), lng: Number(randomPark.longitude) },
            map: map,
            title: randomPark.fullName //Marker shows fullname of park on hover over marker
        });
    });
});

// values for save card 0
let savedName0 = document.querySelector("#saved-name-zero");
let savedImg0 = $('#saved-img-zero');
let savedDesc0 = $('#saved-desc-zero');
let savedLink0 = $('#saved-link-zero');
let savedWeateher0 = $('#saved-weather-zero');
let deleteBtn0 = $('#delete-btn-zero');
// values for save card 1
let savedName1 = $('#saved-name-one');
let savedImg1 = $('#saved-img-one');
let savedDesc1 = $('#saved-desc-one');
let savedLink1 = $('#saved-link-one');
let savedWeateher1 = $('#saved-weather-one');
let deleteBtn1 = $('#delete-btn-one');
// values for save card 2
let savedName2 = $('#saved-name-two');
let savedImg2 = $('#saved-img-two');
let savedDesc2 = $('#saved-desc-two');
let savedLink2 = $('#saved-link-two');
let savedWeateher2 = $('#saved-weather-two');
let deleteBtn2 = $('#delete-btn-two');
// values for save card 3
let savedName3 = $('#saved-name-three');
let savedImg3 = $('#saved-img-three');
let savedDesc3 = $('#saved-desc-three');
let savedLink3 = $('#saved-link-three');
let savedWeateher3 = $('#saved-weather-three');
let deleteBtn3 = $('#delete-btn-three');
// values for save card 4
let savedName4 = $('#saved-name-four');
let savedImg4 = $('#saved-img-four');
let savedDesc4 = $('#saved-desc-four');
let savedLink4 = $('#saved-link-four');
let savedWeateher4 = $('#saved-weather-four');
let deleteBtn4 = $('#delete-btn-four');


// Getting the item from local storage and parsing it
let savedParkList = JSON.parse(localStorage.getItem("savedPark1"));

let saveButtonEl = document.getElementById('save-btn');
saveButtonEl.addEventListener('click', function(event) {
    //console.log('I was clicked!')
    event.preventDefault();
        let savedPark1 = {
            parkTitle: randomPark.fullName , 
            parkImage: randomPark.images[0].url , 
            parkDescription: randomPark.description , 
            parkUrl: randomPark.url ,
            parkWeather: randomPark.weatherInfo,
        }  

        // Getting the item from local storage and parsing it
        let savedParkList = JSON.parse(localStorage.getItem("savedPark1"));

        // If there is nothing in localStorage then set to empty array
        if (!savedParkList) {
            savedParkList = [];
        }
        // Append the current park to the list of saved parks
        savedParkList.push(savedPark1);
        console.log(savedParkList);
        // use json to stringify the object so its readable in local storage
        let stringedSavedPark1 = JSON.stringify(savedParkList);

        localStorage.setItem("savedPark1", stringedSavedPark1);

        // grab the 2nd item in local storage array
        // let storedPark2 = JSON.stringify(savedParkList[1]);

        // if(savedParkList + 1) {
        //     let newSavedPark = savedParkList
        // }
            
}) 

// Sets yellowstone location as default when page loads
function initMap() {
    var options = {
        zoom: 8,
        center: { lat: 44.4280, lng: -110.5885 }
    }

    var map = new google.maps.Map(document.getElementById('map'), options);

    new google.maps.Marker({
        position: { lat: 44.4280, lng: -110.5885 },
        map: map,
        title: 'Yellowstone National Park' //Marker shows Yellowstone park name on hover
    });
}  