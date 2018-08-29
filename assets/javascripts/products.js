/// accessories ///


// let accessory = {
//   name: 'xxx',
//   price: 'xxx',
//   color: 'xxx',
//   imageHref: 'xxx',
//   properties: function() {
//     toString(this.name + "color: " + this.color + "price: " + this.price)
//   }
// }

var accessory;

// defining a costructor function for the accessories
function Accessory(name, price, color, imageHref) {
  this.name = name;
  this.price = price;
  this.color = color;
  this.imageHref = imageHref;
  this.toString = function() {
    return this.name + " - color: " + this.color + " - price: " + this.price;
  }
}

// function to create for each product the html
function displayAccessory(accessories) {

  for (var i = 0; i < accessories.length; i++) {

    // creating the frist div with the class name accessory col-sm-4
    var parentProduct = document.querySelector('#products');
    var newItem = document.createElement('div');
    newItem.className = 'accessory col-sm-4 ' + accessories[i].color;
    parentProduct.appendChild(newItem);

    // creating the second div within the div accessory col-sm-4 with class name card my-3
    var parentProduct = document.getElementsByClassName("accessory col-sm-4")[0+i];
    var newItem = document.createElement('div');
    newItem.className = 'acard my-3';
    parentProduct.appendChild(newItem);

    // creating the third div within the div card my-3 with the class name currency btn btn-light disabled
    var parentProduct = document.getElementsByClassName("acard my-3")[0+i];
    var newItem = document.createElement('div');
    newItem.className = 'currency btn btn-light disabled';
    newItem.textContent = accessories[i].price;
    parentProduct.appendChild(newItem);

    // creating the img within the div card my-3
    var parentProduct = document.getElementsByClassName("acard my-3")[0+i];
    var newItem = document.createElement('img');
    newItem.className = 'card-img-top';
    newItem.src = accessories[i].imageHref;
    newItem.alt = "Image of " + accessories[i].name;
    parentProduct.appendChild(newItem);

    // creating the the forth div within the div card my-3
    var parentProduct = document.getElementsByClassName("acard my-3")[0+i];
    var newItem = document.createElement('div');
    newItem.className = 'card-body text-center';
    parentProduct.appendChild(newItem);

    // creating the h5 title
    var parentProduct = document.getElementsByClassName("card-body text-center")[0+i];
    var newItem = document.createElement('h5');
    newItem.className = 'card-title';
    newItem.textContent = accessories[i].name;
    parentProduct.appendChild(newItem);

    // creating the color paragraph
    var parentProduct = document.getElementsByClassName("card-body text-center")[0+i];
    var newItem = document.createElement('p');
    newItem.className = 'card-tex';
    var firstText = document.createTextNode('Color: ');
    var em = document.createElement('em');
    em.textContent = accessories[i].color;
    newItem.appendChild(firstText);
    newItem.appendChild(em);
    parentProduct.appendChild(newItem);

    // creating the h5 title
    var parentProduct = document.getElementsByClassName("card-body text-center")[0+i];
    var newItem = document.createElement('button');
    newItem.className = 'btn btn-outline-primary';
    newItem.textContent = 'Add to wishlist!';
    parentProduct.appendChild(newItem);
    }
}


// creating the 12 accessories according to the static html
var accessory1 = new Accessory("Baseball cap", 11.99, "red", "./assets/images/red/hats/1.png");
var accessory2 = new Accessory("Baseball cap", 11.99, "blue", "./assets/images/blue/hats/1.png");
var accessory3 = new Accessory("Baseball cap", 11.99, "yellow", "./assets/images/yellow/hats/1.png");
var accessory4 = new Accessory("Baseball cap", 11.99, "green", "./assets/images/green/hats/1.png");
var accessory5 = new Accessory("Beanie", 17.99, "red", "./assets/images/red/hats/2.png");
var accessory6 = new Accessory("Beanie", 17.99, "blue", "./assets/images/blue/hats/2.png");
var accessory7 = new Accessory("Beanie", 17.99, "green", "./assets/images/green/hats/2.png");
var accessory8 = new Accessory("Straw hat", 10.99, "yellow", "./assets/images/yellow/hats/3.png");
var accessory9 = new Accessory("Straw hat", 10.99, "blue", "./assets/images/blue/hats/3.png");
var accessory10 = new Accessory("Triby", 10.99, "red", "./assets/images/red/hats/4.png");
var accessory11 = new Accessory("Triby", 10.99, "blue", "./assets/images/blue/hats/4.png");
var accessory12 = new Accessory("Triby", 10.99, "yellow", "./assets/images/yellow/hats/4.png");

// creating an array and adding the 12 accessories
var accessories = [];
accessories.push(accessory1, accessory2, accessory3, accessory4, accessory5, accessory6, accessory7, accessory8, accessory9, accessory10, accessory11, accessory12);

// runnning the displayaccessory function as many times as the array accessories has elements

displayAccessory(accessories);




/// FILTERS ///

// Get all buttons
var btns = document.getElementsByClassName('btn-group')[0].getElementsByClassName('btn btn-outline-secondary');

// add an addEventListener to all buttons and intiates the highlightSelectedFilterAndFilteraccessoriesByColor function
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function highlightSelectedFilterAndFilteraccessoriesByColor() {

    //deletes active class at current element and adds activ calss on clicked button
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";

    //hides all accessories-elements once clicked on any button
    let hideElements = document.getElementsByClassName('accessory');
      for (let j = 0; j < hideElements.length; j++) {
        hideElements[j].style.display = "none";

        // displays again all accessories if pressd on "all" button
        if (btns[i].textContent.toLowerCase() == "all") {
          for (let k = 0; k < hideElements.length; k++) {
            hideElements[k].style.display = "block"
          }
        }
        // displays the filtered color of the accessories
        if (hideElements[j].className == "accessory col-sm-4 " + btns[i].textContent.toLowerCase()) {
          hideElements[j].style.display = "block";
        }
      }
  });
}

/// SOCKS AND SUNGLASSES ///

// Get all buttons
var btnsNav = document.getElementsByClassName('nav-link btn btn-outline-secondary mr-3');

// check the buttons for a click event and trigger deleteAccssoriesAndDisplayNewOnes function
for (let i = 0; i < btnsNav.length; i++) {
  btnsNav[i].addEventListener("click", function deleteAccssoriesAndDisplayNewOnes () {
    //delete all html
    var elem = document.getElementsByClassName("accessory col-sm-4");
    // delete accessories array
    for (var i = accessories.length-1; i >= 0; i--) {
      elem[i].parentNode.removeChild(elem[i]);
      accessories.splice(i, 1);
    };
    // grab category
    var category = this.textContent.toLowerCase();
      if (category === "hats") {
        accessories.push(accessory1, accessory2, accessory3, accessory4, accessory5, accessory6, accessory7, accessory8, accessory9, accessory10, accessory11, accessory12);
        displayAccessory(accessories);
      } else {
          fetch(String(category) + ".json")
          .then(function(response) { return response.json(); })
          .then(function(json) {
            if (category === "socks") {
              for (var i = 0; i < json.socks.length; i++) {
                accessories.push(json.socks[i]);
              }
            } else if (category === "sunglasses") {
                for (var i = 0; i < json.sunglasses.length; i++) {
                  accessories.push(json.sunglasses[i]);
                }
              } else if (category === "gloves") {
                for (var i = 0; i < json.gloves.length; i++) {
                  accessories.push(json.gloves[i]);
                }
              }
          displayAccessory(accessories);
          });
        }
    });
}

// THE WISHLIST

// Creating a variable to store the index of the clicked button
var indexClicked;

// cearting a function that makes the EventListener live (not static)
function live (eventType, elementQuerySelector, cb) {
    document.addEventListener(eventType, function (event) {
        var qs = document.querySelectorAll(elementQuerySelector);
        if (qs) {
            var el = event.target, index = -1;
            while (el && ((index = Array.prototype.indexOf.call(qs, el)) === -1)) {
                el = el.parentElement;
            }
            if (index > -1) {
                indexClicked = index;
                cb.call(el, event);

            }
        }
    });
}
// var storedV
var storedValue1;
var storedValue2;
var storedValue3;

function addToWishlist(accessory) {
    if (localStorage.getItem('accessory1') === null) {
      let accessory1asJson = JSON.stringify(accessory);
      localStorage.setItem('accessory1', accessory1asJson);
    } else if (localStorage.getItem('accessory2') === null) {
        let accessory2asJson = JSON.stringify(accessory);
        localStorage.setItem('accessory2', accessory2asJson);
    } else if (localStorage.getItem('accessory3') === null) {
        let accessory3asJson = JSON.stringify(accessory);
        localStorage.setItem('accessory3', accessory3asJson);
    } else {
      alert("Sorry, but your wishlist is full!!")
    }
    storedValue1 = localStorage.getItem('accessory1');
    storedValue2 = localStorage.getItem('accessory2');
    storedValue3 = localStorage.getItem('accessory3');
  }

  // let accessory1asJson = JSON.stringify(accessory);
  // localStorage.removeItem('accessory1');
  // localStorage.setItem('accessory1', accessory1asJson);




live('click', '.btn-outline-primary', function(event) {
  addToWishlist(accessories[indexClicked]);
  });










//
// Get all the wishlist buttons
// var btnsWish = document.getElementsByClassName('btn btn-outline-primary');
//
// var category2;
//
// for (let i = 0; i < btnsWish.length; i++) {
//   btnsWish[i].addEventListener("click", function addToWishlist() {
//   category2 = accessories[i];
//   alert(category2)
//   });
// }
