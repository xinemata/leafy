// editable info

const publicSpreadsheetUrl =
  "https://docs.google.com/spreadsheets/d/1Q23ZnH7KHBHahFT65_9RisSu1Wk4gNOrowiprtxgE4A/edit?usp=sharing"; // change this to your own URL
const sheetName = "Sheet1"; // this has to match your google doc sheet name. In Leafy, you can only use one sheet
const punctuation = ","; // this changes the punctuation between the title and the description. In most cases you'd want to use "," or "-" or ":"

// tableTop.js script
function init() {
  Tabletop.init({
    key: publicSpreadsheetUrl,
    callback: showInfo,
    simpleSheet: true
  });
}

function showInfo(data, tabletop) {
  const checked = "x";
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
          data[j][columnName[1]],
          data[j][columnName[2]]
        );
      }
    }
  }
  // alert("Successfully processed!"); // check if data is imported
}

function addButton(columnName) {
  const newButton = document.createElement("BUTTON");
  const newButtonContent = document.createTextNode(columnName);
  newButton.appendChild(newButtonContent);
  newButton.className = "btn";
  newButton.addEventListener("click", function() {
    filterSelection(columnName);
  });
  document.getElementById("myBtnContainer").appendChild(newButton);
}

function addElement(columnName, person, url, description) {
  const hashtag1 = ["filterDiv"];
  const hashtag2 = [columnName];
  const hashtagArray = hashtag1.concat(hashtag2);
  const hashtagString = hashtagArray.join(" ");
  const newDiv = document.createElement("div");
  newDiv.className = hashtagString;

  // place individual link inside individual div
  for (let i = 0; i < 1; i++) {
    let link = document.createElement("a");
    let linkContent = document.createTextNode(person);
    link.appendChild(linkContent);
    link.title = person;
    link.href = url;

    let para = document.createElement("p");
    let paraContent = document.createTextNode(`${punctuation} ${description}`);
    para.appendChild(paraContent);

    para.appendChild(link); // put <a> into <p>
    link.after(paraContent); // put <p> description after <a>
    newDiv.appendChild(para); // put <p> into newDiv
  }
  document.getElementsByClassName("container")[0].appendChild(newDiv);
}

window.addEventListener("DOMContentLoaded", init);

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