


// create a function that gets the values from local storage as JSON-objects
function getAccessories() {
  let array = [];
  for (let i = 1; i < 5; i++) {
    // check if local storage has values, if yes convert them to JSON-objects
    if (localStorage.getItem('accessory'+[i]) !== null) {
      let stringValue = localStorage.getItem('accessory'+[i]);
      let jsObject = JSON.parse(stringValue);
      array.push(jsObject);
      } else {
        return (array);
        break;
      }
  }
}

let storedValues = getAccessories();

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

function displayAccessoryButtonB() {
// creating the Remove button
divs = document.getElementsByClassName("card-body text-center");
parentProduct = divs[divs.length - 1];
newItem = document.createElement('button');
newItem.className = 'btn btn-outline-danger';
newItem.textContent = 'Remove';
parentProduct.appendChild(newItem);

}



function displayWishlist() {
  for (let i = 0; i < storedValues.length; i++) {
  displayAccessoryGlobal(storedValues[i])
  displayAccessoryButtonB(storedValues[i])
  }
}

try {
  displayWishlist();
} catch(error) {
  console.log("That  code is broken. Error: " + error);
}



// // function that displays the items of the wishlist
// function displayWishlist() {
//   for (let i = 0; i < storedValues.length; i++) {
//
//     // creating the frist div with the class name accessory col-sm-4
//     let parentProduct = document.querySelector('#products');
//     let newItem = document.createElement('div');
//     newItem.className = 'accessory col-sm-4 ' + storedValues[i].color;
//     parentProduct.appendChild(newItem);
//
//     // creating the second div within the div accessory col-sm-4 with class name card my-3
//     parentProduct = document.getElementsByClassName("accessory col-sm-4")[0+i];
//     newItem = document.createElement('div');
//     newItem.className = 'acard my-3';
//     parentProduct.appendChild(newItem);
//
//     // creating the third div within the div card my-3 with the class name currency btn btn-light disabled
//     parentProduct = document.getElementsByClassName("acard my-3")[0+i];
//     newItem = document.createElement('div');
//     newItem.className = 'currency btn btn-light disabled';
//     newItem.textContent = storedValues[i].price;
//     parentProduct.appendChild(newItem);
//
//     // creating the img within the div card my-3
//     parentProduct = document.getElementsByClassName("acard my-3")[0+i];
//     newItem = document.createElement('img');
//     newItem.className = 'card-img-top';
//     newItem.src = storedValues[i].imageHref;
//     newItem.alt = "Image of " + storedValues[i].name;
//     parentProduct.appendChild(newItem);
//
//     // creating the the forth div within the div card my-3
//     parentProduct = document.getElementsByClassName("acard my-3")[0+i];
//     newItem = document.createElement('div');
//     newItem.className = 'card-body text-center';
//     parentProduct.appendChild(newItem);
//
//     // creating the h5 title
//     parentProduct = document.getElementsByClassName("card-body text-center")[0+i];
//     newItem = document.createElement('h5');
//     newItem.className = 'card-title';
//     newItem.textContent = storedValues[i].name;
//     parentProduct.appendChild(newItem);
//
//     // creating the color paragraph
//     parentProduct = document.getElementsByClassName("card-body text-center")[0+i];
//     newItem = document.createElement('p');
//     newItem.className = 'card-tex';
//     let firstText = document.createTextNode('Color: ');
//     let em = document.createElement('em');
//     em.textContent = storedValues[i].color;
//     newItem.appendChild(firstText);
//     newItem.appendChild(em);
//     parentProduct.appendChild(newItem);
//
//     // creating the Remove button
//     parentProduct = document.getElementsByClassName("card-body text-center")[0+i];
//     newItem = document.createElement('button');
//     newItem.className = 'btn btn-outline-danger';
//     newItem.textContent = 'Remove';
//     parentProduct.appendChild(newItem);
//   }
// }
//
// // variable to store the index of the clicked button
// let indexClicked;
//
// // Function that makes the EventListener live (not static)
// function live (eventType, elementQuerySelector, cb) {
//     document.addEventListener(eventType, function (event) {
//         let qs = document.querySelectorAll(elementQuerySelector);
//         if (qs) {
//             let el = event.target, index = -1;
//             while (el && ((index = Array.prototype.indexOf.call(qs, el)) === -1)) {
//                 el = el.parentElement;
//             }
//             if (index > -1) {
//                 indexClicked = index;
//                 cb.call(el, event);
//
//             }
//         }
//     });
// }
//
// // Function that removes items from wishlist (html, let storedValues AND localStorage)
// function removeFromWishList(key, htmlComponent) {
//   let elem = document.getElementsByClassName(htmlComponent);
//   elem[indexClicked].parentNode.removeChild(elem[indexClicked]);
//   storedValues.splice([indexClicked], 1);
//   localStorage.removeItem(key);
// }
//
// call the functions with an error handling
try {
  getAccessories();
  displayWishlist();
  live('click', '.btn-outline-danger', function(event) {
    removeFromWishList('accessory'+[indexClicked+1], "accessory col-sm-4");
    });
} catch(error) {
  console.log("That  code is broken. Error: " + error);
}
