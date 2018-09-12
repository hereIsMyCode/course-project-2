/// ACCESSORIES ///

// let accessory = {
//   name: 'xxx',
//   price: 'xxx',
//   color: 'xxx',
//   imageHref: 'xxx',
//   properties: function() {
//     toString(this.name + "color: " + this.color + "price: " + this.price)
//   }
// }

let accessory;

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

// creating the 12 accessories according to the static html
let accessory1 = new Accessory("Baseball cap", 11.99, "red", "./assets/images/red/hats/1.png");
let accessory2 = new Accessory("Baseball cap", 11.99, "blue", "./assets/images/blue/hats/1.png");
let accessory3 = new Accessory("Baseball cap", 11.99, "yellow", "./assets/images/yellow/hats/1.png");
let accessory4 = new Accessory("Baseball cap", 11.99, "green", "./assets/images/green/hats/1.png");
let accessory5 = new Accessory("Beanie", 17.99, "red", "./assets/images/red/hats/2.png");
let accessory6 = new Accessory("Beanie", 17.99, "blue", "./assets/images/blue/hats/2.png");
let accessory7 = new Accessory("Beanie", 17.99, "green", "./assets/images/green/hats/2.png");
let accessory8 = new Accessory("Straw hat", 10.99, "yellow", "./assets/images/yellow/hats/3.png");
let accessory9 = new Accessory("Straw hat", 10.99, "blue", "./assets/images/blue/hats/3.png");
let accessory10 = new Accessory("Triby", 10.99, "red", "./assets/images/red/hats/4.png");
let accessory11 = new Accessory("Triby", 10.99, "blue", "./assets/images/blue/hats/4.png");
let accessory12 = new Accessory("Triby", 10.99, "yellow", "./assets/images/yellow/hats/4.png");

// creating an array and adding the 12 accessories
let accessories = [];
accessories.push(accessory1, accessory2, accessory3, accessory4, accessory5, accessory6, accessory7, accessory8, accessory9, accessory10, accessory11, accessory12);


// function to create for each product the html
function displayAccessoryGlobal(accessories) {

    // creating the frist div with the class name accessory col-sm-4
    let parentProduct = document.querySelector('#products');
    let newItem = document.createElement('div');
    newItem.className = 'accessory col-sm-4 ' + accessories.color;
    parentProduct.appendChild(newItem);

    // creating the second div within the div accessory col-sm-4 with class name card my-3
    let divs = document.getElementsByClassName("accessory col-sm-4");
    parentProduct = divs[divs.length - 1];
    newItem = document.createElement('div');
    newItem.className = 'acard my-3';
    parentProduct.appendChild(newItem);

    // creating the third div within the div card my-3 with the class name currency btn btn-light disabled
    divs = document.getElementsByClassName("acard my-3");
    parentProduct = divs[divs.length - 1];
    newItem = document.createElement('div');
    newItem.className = 'currency btn btn-light disabled';
    newItem.textContent = accessories.price;
    parentProduct.appendChild(newItem);

    // creating the img within the div card my-3
    divs = document.getElementsByClassName("acard my-3");
    parentProduct = divs[divs.length - 1];
    newItem = document.createElement('img');
    newItem.className = 'card-img-top';
    newItem.src = accessories.imageHref;
    newItem.alt = "Image of " + accessories.name;
    parentProduct.appendChild(newItem);

    // creating the the forth div within the div card my-3
    divs = document.getElementsByClassName("acard my-3");
    parentProduct = divs[divs.length - 1];
    newItem = document.createElement('div');
    newItem.className = 'card-body text-center';
    parentProduct.appendChild(newItem);

    // creating the h5 title
    divs = document.getElementsByClassName("card-body text-center");
    parentProduct = divs[divs.length - 1];
    newItem = document.createElement('h5');
    newItem.className = 'card-title';
    newItem.textContent = accessories.name;
    parentProduct.appendChild(newItem);

    // creating the color paragraph
    divs = document.getElementsByClassName("card-body text-center");
    parentProduct = divs[divs.length - 1];
    newItem = document.createElement('p');
    newItem.className = 'card-tex';
    let firstText = document.createTextNode('Color: ');
    let em = document.createElement('em');
    em.textContent = accessories.color;
    newItem.appendChild(firstText);
    newItem.appendChild(em);
    parentProduct.appendChild(newItem);

}

function displayAccessoryButtonA() {

  // creating the button
  divs = document.getElementsByClassName("card-body text-center");
  parentProduct = divs[divs.length - 1];
  newItem = document.createElement('button');
  newItem.className = 'btn btn-outline-primary';
  newItem.textContent = 'Add to wishlist!';
  newItem.addEventListener('click', function() {addToWishList(accessories)});
  parentProduct.appendChild(newItem);

}

for (let i = 0; i < accessories.length; i++) {
  displayAccessoryGlobal(accessories[i]);
  displayAccessoryButtonA(accessories[i]);
};


/// FILTERS ///

function highlightSelectedFilter(clickedIndex) {
  //deletes active class at current element and adds activ calss on clicked button
  let current = document.querySelector(".btn-group .active");
  current.className = current.className.replace(" active", "");
  btns[clickedIndex].className += " active";
}

function filterHatsByColor(clickedIndex) {
  //hides all accessories-elements
  let hideElements = document.getElementsByClassName('accessory');
  for (let j = 0; j < hideElements.length; j++) {
    hideElements[j].style.display = "none";
    // displays the filtered color of the accessories
    if (hideElements[j].className == "accessory col-sm-4 " + btns[clickedIndex].textContent.toLowerCase()) {
      hideElements[j].style.display = "block";
    }
    if (btns[clickedIndex].textContent.toLowerCase() == "all") {
        hideElements[j].style.display = "block";
    }
  }
}

// Get all buttons
let btns = document.getElementsByClassName('btn-group')[0].getElementsByClassName('btn btn-outline-secondary');
// add an addEventListener to all buttons and intiates the highlightSelectedFilter and filterHatsByColor functions
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function() {
       highlightSelectedFilter([i]);
       filterHatsByColor([i]);
  })
};




/// SOCKS AND SUNGLASSES ///

function loadRemoteAccessories(clickedIndex) {
  //delete all html
  let elem = document.getElementsByClassName("accessory col-sm-4");
  // delete accessories array
  for (let i = accessories.length-1; i >= 0; i--) {
    elem[i].parentNode.removeChild(elem[i]);
    accessories.splice(i, 1);
  };

  // grab category
  let category = btnsNav[clickedIndex].textContent.toLowerCase();
  // display hats if hats is clicked
  if (category === "hats") {
     accessories.push(accessory1, accessory2, accessory3, accessory4, accessory5, accessory6, accessory7, accessory8, accessory9, accessory10, accessory11, accessory12);
     for (let i = 0; i < 12; i++) {
       displayAccessory(accessories[i]);
     }
  // fetch remote accessories and display them
  } else {
  fetch(String(category) + ".json")
  .then(function(response) { return response.json(); })
  .then(function(json) {
    if (category === "socks") {
      for (let i = 0; i < json.socks.length; i++) {
        accessories.push(json.socks[i]);
        displayAccessory(accessories[i]);
      }
    } else if (category === "sunglasses") {
        for (let i = 0; i < json.sunglasses.length; i++) {
          accessories.push(json.sunglasses[i]);
          displayAccessory(accessories[i]);
        }
      } else if (category === "gloves") {
        for (let i = 0; i < json.gloves.length; i++) {
          accessories.push(json.gloves[i]);
          displayAccessory(accessories[i]);
        }
      }
    });
  }
}

// Get all buttons
let btnsNav = document.getElementsByClassName('nav-link btn btn-outline-secondary mr-3');

// add an addEventListener to all buttons and intiates the highlightSelectedFilter and filterHatsByColor functions
for (let i = 0; i < btnsNav.length; i++) {
  btnsNav[i].addEventListener('click', function() {
       loadRemoteAccessories([i]);
  })
};


// THE WISHLIST

// addToWishList Function that stores up to three items in local storage and alerts the forth time
function addToWishList(accessory) {
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
  }
