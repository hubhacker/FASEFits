var topArray = [];
var bottomArray = [];
var shoesArray = [];
var accArray = [];

var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');


//container variables
var topsDiv = document.querySelector('.tops-content');
var bottomsDiv = document.querySelector('.bottoms-content');
var shoesDiv = document.querySelector('.shoes-content');
var accessoryDiv = document.querySelector('.acc-content');


// Get theme from the URL parameters?
const urlParams = new URLSearchParams(window.location.search);
const theme = urlParams.get('theme');

//enter button commands
button.addEventListener('click', function (name) {
  fetchData();
});

input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    fetchData();
  }
});


// function clearArrays() {
//   topArray.splice(0, topArray.length);
//   bottomArray.splice(0, bottomArray.length);
//   shoesArray.splice(0, shoesArray.length);
//   accArray.splice(0, accArray.length);
// }


//fetching data from API
function fetchData() {
  var tempValue; // Declare tempValue here

  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=50a7aa80fa492fa92e874d23ad061374')
    .then(response => response.json())
    .then(data => {
      // Update tempValue inside the fetch
      tempValue = data['main']['temp'];
      var nameValue = data['name'];
      var descValue = data['weather'][0]['description'];

      tempValue = 1.8 * (tempValue - 273.15) + 32;

      //putting the vaues into index.html
      main.innerHTML = nameValue;
      desc.innerHTML = "Description: " + descValue;
      temp.innerHTML = "Temperature (°F): " + parseInt(tempValue.toFixed(0)) + "°";

      input.value = "";

      //decided which temps decide which fits
      tempValue = parseInt(tempValue.toFixed(0));

      if (tempValue <= 40){
        coldfits();
      } else if (tempValue >= 41 && tempValue <=60){
        chillyfits();
      } else if (tempValue >= 61 && tempValue <=75){
        warmfits();
      } else if(tempValue > 75) {
        hotfits();
      } else {
        hotfits();
      }

    })

    // .catch(err => {
    //   alert("Please enter a valid city.");
    //   //throw err; // Re-throw the error to stop execution
    // });

}

//coldfits; pushing images into and array and then sending the array to the html
function coldfits() {
  

  clearImages();
  var coldTop1 = new Image();
  coldTop1.src = "img/cold_top_1.png";
  var coldTop2 = new Image();
  coldTop2.src = "img/cold_top_2.png";
  topArray.push(coldTop1, coldTop2);

  var coldBottom1 = new Image();
  coldBottom1.src = "img/cold_bottom_1.png";
  var coldBottom2 = new Image();
  coldBottom2.src = "img/cold_bottom_2.png";
  bottomArray.push(coldBottom1, coldBottom2);

  var coldShoes1 = new Image();
  coldShoes1.src = "img/cold_shoes_1.png";
  var coldShoes2 = new Image();
  coldShoes2.src = "img/cold_shoes_2.png";
  shoesArray.push(coldShoes1, coldShoes2);

  var coldAcc1 = new Image();
  coldAcc1.src = "img/cold_acc_1.png";
  var coldAcc2 = new Image();
  coldAcc2.src = "img/cold_acc_2.png";
  accArray.push(coldAcc1, coldAcc2);

  // Append images to HTML
  appendImages(topArray, topsDiv);
  appendImages(bottomArray, bottomsDiv);
  appendImages(shoesArray, shoesDiv);
  appendImages(accArray, accessoryDiv);
}

//chillyfits
function chillyfits() {
  clearImages();
  var chillyTop1 = new Image();
  chillyTop1.src = "img/chilly_top_1.png";
  var chillyTop2 = new Image();
  chillyTop2.src = "img/chilly_top_2.png";
  topArray.push(chillyTop1, chillyTop2);

  var chillyBottom1 = new Image();
  chillyBottom1.src = "img/chilly_bottom_1.png";
  var chillyBottom2 = new Image();
  chillyBottom2.src = "img/chilly_bottom_2.png";
  bottomArray.push(chillyBottom1, chillyBottom2);

  var chillyShoes1 = new Image();
  chillyShoes1.src = "img/chilly_shoes_1.png";
  var chillyShoes2 = new Image();
  chillyShoes2.src = "img/chilly_shoes_2.png";
  shoesArray.push(chillyShoes1, chillyShoes2);

  var chillyAcc1 = new Image();
  chillyAcc1.src = "img/chilly_acc_1.png";
  var chillyAcc2 = new Image();
  chillyAcc2.src = "img/chilly_acc_2.png";
  accArray.push(chillyAcc1, chillyAcc2);

  // Append images to HTML
  appendImages(topArray, topsDiv);
  appendImages(bottomArray, bottomsDiv);
  appendImages(shoesArray, shoesDiv);
  appendImages(accArray, accessoryDiv);
}

//warmfits
function warmfits() {
  clearImages();
  var warmTop1 = new Image();
  warmTop1.src = "img/warm_top_1.png";
  var warmTop2 = new Image();
  warmTop2.src = "img/warm_top_2.png";
  topArray.push(warmTop1, warmTop2);

  var warmBottom1 = new Image();
  warmBottom1.src = "img/warm_bottom_1.png";
  var warmBottom2 = new Image();
  warmBottom2.src = "img/warm_bottom_2.png";
  bottomArray.push(warmBottom1, warmBottom2);

  var warmShoes1 = new Image();
  warmShoes1.src = "img/warm_shoes_1.png";
  var warmShoes2 = new Image();
  warmShoes2.src = "img/warm_shoes_2.png";
  shoesArray.push(warmShoes1, warmShoes2);

  var warmAcc1 = new Image();
  warmAcc1.src = "img/warm_acc_1.png";
  var warmAcc2 = new Image();
  warmAcc2.src = "img/warm_acc_2.png";
  accArray.push(warmAcc1, warmAcc2);

  // Append images to HTML
  appendImages(topArray, topsDiv);
  appendImages(bottomArray, bottomsDiv);
  appendImages(shoesArray, shoesDiv);
  appendImages(accArray, accessoryDiv);
}

// hotfits
function hotfits() {
  clearImages();
  var hotTop1 = new Image();
  hotTop1.src = "img/hot_top_1.png";
  var hotTop2 = new Image();
  hotTop2.src = "img/hot_top_2.png";
  topArray.push(hotTop1, hotTop2);


  var hotBottom1 = new Image();
  hotBottom1.src = "img/hot_bottom_1.png";
  var hotBottom2 = new Image();
  hotBottom2.src = "img/hot_bottom_2.png";
  bottomArray.push(hotBottom1, hotBottom2);

  var hotShoes1 = new Image();
  hotShoes1.src = "img/hot_shoes_1.png";
  var hotShoes2 = new Image();
  hotShoes2.src = "img/hot_shoes_2.png";
  shoesArray.push(hotShoes1, hotShoes2);

  var hotAcc1 = new Image();
  hotAcc1.src = "img/hot_acc_1.png";
  var hotAcc2 = new Image();
  hotAcc2.src = "img/hot_acc_2.png";
  accArray.push(hotAcc1, hotAcc2);

  // Append images to HTML
  appendImages(topArray, topsDiv);
  appendImages(bottomArray, bottomsDiv);
  appendImages(shoesArray, shoesDiv);
  appendImages(accArray, accessoryDiv);
}

// Function to append images to HTML
function appendImages(imagesArray, container) {
  imagesArray.forEach(function(image) {
    container.appendChild(image);
  });
}

  //clears the outfits for hte next search; sets html grid divs to empty and the arrays to empty
 function clearImages() {
   topsDiv.innerHTML = '';
   bottomsDiv.innerHTML = '';
   shoesDiv.innerHTML = '';
   accessoryDiv.innerHTML = '';

   topArray = [];
   bottomArray = [];
   shoesArray = [];
   accArray = [];
}

//gets a random int, gonna be used to randomize outfits. 
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
