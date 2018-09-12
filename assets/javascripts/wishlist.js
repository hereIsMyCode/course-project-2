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

function displayAccessoryButtonB(index, key) {
// creating the Remove button
divs = document.getElementsByClassName("card-body text-center");
parentProduct = divs[divs.length - 1];
newItem = document.createElement('button');
newItem.className = 'btn btn-outline-danger';
newItem.textContent = 'Remove';
newItem.addEventListener('click', function() {removeFromWishList(index, key, "accessory col-sm-4")});
parentProduct.appendChild(newItem);

}

function displayWishlist() {
  for (let i = 0; i < storedValues.length; i++) {
  displayAccessoryGlobal(storedValues[i])
  displayAccessoryButtonB([i], 'accessory'+[Number(i)+1])
  }
}

function removeFromWishList(index, key, htmlComponent) {
  let elem = document.getElementsByClassName(htmlComponent);
  elem[index].parentNode.removeChild(elem[index]);
  storedValues.splice([index], 1);
  localStorage.removeItem(key);
}

try {
  displayWishlist();
} catch(error) {
  console.log("That  code is broken. Error: " + error);
}
