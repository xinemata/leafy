// tableTop.js script

var publicSpreadsheetUrl =
  "https://docs.google.com/spreadsheets/d/1Q23ZnH7KHBHahFT65_9RisSu1Wk4gNOrowiprtxgE4A/edit?usp=sharing";

function init() {
  Tabletop.init({
    key: publicSpreadsheetUrl,
    callback: showInfo,
    simpleSheet: true
  });
}

function showInfo(data, tabletop) {
  const checked = "x";
  const sheetName = "Sheet1";
  const columnArray = tabletop.sheets()[sheetName].columnNames;
  const columnName = [columnArray.length];

  for (let j = 0; j < columnArray.length; j++) {
    columnName[j] = columnArray[j];
  }

  // create sorting buttons
  for (let j = 3; j < columnArray.length; j++) {
    addButton(columnName[j]);
  }

  for (let i = 3; i < columnArray.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[j][columnName[i]] == checked) {
        addElement(
          columnName[i],
          data[j][columnName[0]],
          data[j][columnName[1]]
        );
      }
    }
    // if (data[i][columnName[3]] == checked) {
    //   addElement(columnName[3], data[i][columnName[0]], data[i][columnName[1]]);
    // } else if (data[i][columnName[4]] == checked) {
    //   addElement(columnName[4], data[i][columnName[0]], data[i][columnName[1]]);
    // }
  }
  // alert("Successfully processed!"); // check if data is imported
}

function addButton(columnName) {
  let newButton = document.createElement("BUTTON");
  let newButtonContent = document.createTextNode(columnName);
  newButton.appendChild(newButtonContent);
  newButton.className = "btn";
  newButton.addEventListener("click", function() {
    filterSelection(columnName);
  });
  document.getElementById("myBtnContainer").appendChild(newButton);
}

function addElement(columnName, person, url) {
  const hashtag1 = "filterDiv";
  const hashtag2 = columnName;
  let hashtags = `${hashtag1} ${hashtag2}`;
  let newDiv = document.createElement("div");
  // newDiv.setAttribute("id", "myDiv");
  newDiv.className = hashtags;
  document.getElementsByClassName("container")[0].appendChild(newDiv);
  addPerson(person, hashtags, url);
}

function addPerson(person, hashtags, url) {
  // let name = document.createElement("p");
  // name.textContent = person;
  // document.getElementsByClassName(hashtags)[0].appendChild(name);

  let link = document.createElement("a");
  let linkContent = document.createTextNode(person);
  link.appendChild(linkContent);
  link.title = person;
  link.href = url;
  document.getElementsByClassName(hashtags)[0].appendChild(link);
}

// function addLink(){
//   let link = document.createElement("a");
//   link.textContent = "https://prettydarke.cool/";
//   // document.getElementsByClassName(hashtags)[0].appendChild(name);

//   document.body.insertBefore(name, link);
// }

window.addEventListener("DOMContentLoaded", init);

//

// document.body.onload = addElement;

// function addElement() {
//   // create a new div element
//   var newDiv = document.createElement("div");
//   // newDiv.setAttribute("id", "myDiv");
//   newDiv.className = "notice";
//   newDiv.style.display = "inline-block";
//   // and give it some content
//   var newContent = document.createTextNode("Hi there and greetings!");
//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);
//   // test case, append the div to the body
//   document.body.appendChild(newDiv);

//   // add the newly created element and its content into the DOM
//   // var currentDiv = document.getElementById("div1");
//   // document.body.insertBefore(newDiv, currentDiv);
// }

// filter script

filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
  console.log(c);
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
