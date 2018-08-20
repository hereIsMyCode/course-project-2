/// HATS ///


let hat = {
  name: 'xxx',
  price: 'xxx',
  color: 'xxx',
  imageHref: 'xxx',
  properties: function() {
    toString(this.name + "color: " + this.color + "price: " + this.price)
  }
}

// defining a costructor function for the hats
function Hat(name, price, color, imageHref) {
  this.name = name;
  this.price = price;
  this.color = color;
  this.imageHref = imageHref;
  this.toString = function() {
    return this.name + " - color: " + this.color + " - price: " + this.price;
  }
}

// creating the 12 hats according to the static html
var hat1 = new Hat("Baseball cap", 11.99, "red", "./assets/images/red/hats/1.png");
var hat2 = new Hat("Baseball cap", 11.99, "blue", "./assets/images/blue/hats/1.png");
var hat3 = new Hat("Baseball cap", 11.99, "yellow", "./assets/images/yellow/hats/1.png");
var hat4 = new Hat("Baseball cap", 11.99, "green", "./assets/images/green/hats/1.png");
var hat5 = new Hat("Beanie", 17.99, "red", "./assets/images/red/hats/2.png");
var hat6 = new Hat("Beanie", 17.99, "blue", "./assets/images/blue/hats/2.png");
var hat7 = new Hat("Beanie", 17.99, "green", "./assets/images/green/hats/2.png");
var hat8 = new Hat("Straw hat", 10.99, "yellow", "./assets/images/yellow/hats/3.png");
var hat9 = new Hat("Straw hat", 10.99, "blue", "./assets/images/blue/hats/3.png");
var hat10 = new Hat("Triby", 10.99, "red", "./assets/images/red/hats/4.png");
var hat11 = new Hat("Triby", 10.99, "blue", "./assets/images/blue/hats/4.png");
var hat12 = new Hat("Triby", 10.99, "yellow", "./assets/images/yellow/hats/4.png");

// creating an array and adding the 12 hats
var hats = [];
hats.push(hat1, hat2, hat3, hat4, hat5, hat6, hat7, hat8, hat9, hat10, hat11, hat12);

// runnning the displayHat function as many times as the array hats has elements
for (var i = 0; i < hats.length; i++) {

  function displayHat(hats) {

  // creating the frist div with the class name accessory col-sm-4
  var parentProduct = document.querySelector('#products');
  var newItem = document.createElement('div');
  newItem.className = 'accessory col-sm-4 ' + hats[i].color;
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
  newItem.textContent = hats[i].price;
  parentProduct.appendChild(newItem);

  // creating the img within the div card my-3
  var parentProduct = document.getElementsByClassName("acard my-3")[0+i];
  var newItem = document.createElement('img');
  newItem.className = 'card-img-top';
  newItem.src = hats[i].imageHref;
  newItem.alt = "Image of " + hats[i].name;
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
  newItem.textContent = hats[i].name;
  parentProduct.appendChild(newItem);

  // creating the color paragraph
  var parentProduct = document.getElementsByClassName("card-body text-center")[0+i];
  var newItem = document.createElement('p');
  newItem.className = 'card-tex';
  var firstText = document.createTextNode('Color: ');
  var em = document.createElement('em');
  em.textContent = hats[i].color;
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

  displayHat(hats);
}


/// FILTERS ///

// Get all buttons
var btns = document.getElementsByClassName('btn-group')[0].getElementsByClassName('btn btn-outline-secondary');

// add an addEventListener to all buttons and intiates the highlightSelectedFilterAndFilterHatsByColor function
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function highlightSelectedFilterAndFilterHatsByColor() {

    //deletes active class at current element and adds activ calss on clicked button
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";

    //hides all hats-elements once clicked on any button
    let hideElements = document.getElementsByClassName('accessory');
      for (let j = 0; j < hideElements.length; j++) {
        hideElements[j].style.display = "none";

        // displays again all hats if pressd on "all" button
        if (btns[i].textContent.toLowerCase() == "all") {
          for (let k = 0; k < hideElements.length; k++) {
            hideElements[k].style.display = "block"
          }
        }
        // displays the filtered color of the hats
        if (hideElements[j].className == "accessory col-sm-4 " + btns[i].textContent.toLowerCase()) {
          hideElements[j].style.display = "block";
        }
      }
  });
}

/// SOCKS AND SUNGLASSES ///
