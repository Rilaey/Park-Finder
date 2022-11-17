// values for save card 0
let savedName0 = document.querySelector("#saved-name-zero");
let savedImg0 = document.querySelector("#saved-img-zero");
let savedDesc0 = document.querySelector("#saved-desc-zero");
let savedLink0 = document.querySelector("#saved-link-zero");
let savedWeather0 = document.querySelector("#saved-weather-zero");
let deleteBtn0 = document.querySelector("#delete-btn-zero");
// values for save card 1
let savedName1 = document.querySelector("#saved-name-one");
let savedImg1 = document.querySelector("#saved-img-one");
let savedDesc1 = document.querySelector("#saved-desc-one");
let savedLink1 = document.querySelector("#saved-link-one");
let savedWeather1 = document.querySelector("#saved-weather-one");
let deleteBtn1 = document.querySelector("#delete-btn-one");
// values for save card 2
let savedName2 = document.querySelector("#saved-name-two");
let savedImg2 = document.querySelector("#saved-img-two");
let savedDesc2 = document.querySelector("#saved-desc-two");
let savedLink2 = document.querySelector("#saved-link-two");
let savedWeather2 = document.querySelector("#saved-weather-two");
let deleteBtn2 = document.querySelector("#delete-btn-two");
// values for save card 3
let savedName3 = document.querySelector("#saved-name-three");
let savedImg3 = document.querySelector("#saved-img-three");
let savedDesc3 = document.querySelector("#saved-desc-three");
let savedLink3 = document.querySelector("#saved-link-three");
let savedWeather3 = document.querySelector("#saved-weather-three");
let deleteBtn3 = document.querySelector("#delete-btn-three");
// values for save card 3
let savedName4 = document.querySelector("#saved-name-four");
let savedImg4 = document.querySelector("#saved-img-four");
let savedDesc4 = document.querySelector("#saved-desc-four");
let savedLink4 = document.querySelector("#saved-link-four");
let savedWeather4 = document.querySelector("#saved-weather-four");
let deleteBtn4 = document.querySelector("#delete-btn-four");

if(savedName0) {

}

let savedParkList = JSON.parse(localStorage.getItem("savedPark1"));

// text content being pulled from the index of 0 in the local storage array
savedName0.textContent = savedParkList[0].parkTitle;
savedDesc0.textContent = savedParkList[0].parkDescription;
savedLink0.textContent = savedParkList[0].parkUrl;
savedWeather0.textContent = savedParkList[0].parkWeather;
savedImg0.src = savedParkList[0].parkImage;

$('.container-zero').removeClass('invisible')

// text content being pulled from the index of 1 in the local storage array
savedName1.textContent = savedParkList[1].parkTitle;
savedDesc1.textContent = savedParkList[1].parkDescription;
savedLink1.textContent = savedParkList[1].parkUrl;
savedWeather1.textContent = savedParkList[1].parkWeather;
savedImg1.src = savedParkList[1].parkImage;

$('.container-one').removeClass('invisible')

// text content being pulled from the index of 1 in the local storage array
savedName2.textContent = savedParkList[2].parkTitle;
savedDesc2.textContent = savedParkList[2].parkDescription;
savedLink2.textContent = savedParkList[2].parkUrl;
savedWeather2.textContent = savedParkList[2].parkWeather;
savedImg2.src = savedParkList[2].parkImage;

$('.container-two').removeClass('invisible')

// text content being pulled from the index of 1 in the local storage array
savedName3.textContent = savedParkList[3].parkTitle;
savedDesc3.textContent = savedParkList[3].parkDescription;
savedLink3.textContent = savedParkList[3].parkUrl;
savedWeather3.textContent = savedParkList[3].parkWeather;
savedImg3.src = savedParkList[3].parkImage;

$('.container-three').removeClass('invisible')

// text content being pulled from the index of 1 in the local storage array
savedName4.textContent = savedParkList[4].parkTitle;
savedDesc4.textContent = savedParkList[4].parkDescription;
savedLink4.textContent = savedParkList[4].parkUrl;
savedWeather4.textContent = savedParkList[4].parkWeather;
savedImg4.src = savedParkList[4].parkImage;

$('.container-four').removeClass('invisible')

// delete function for 0 index of local storage array

// let storedPark0 = JSON.stringify(savedParkList[0]);
// //console.log(storedPark0)

// deleteBtn0.addEventListener('click',function() {
//     window.alert('hi')
//      localStorage.removeItem(storedPark0)
// })

document.querySelector(".delete-button").attr("style", "hidden");