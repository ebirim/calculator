resultDisplay = document.getElementById('re-display')
var retext = resultDisplay.textContent;

var val1 = 0
var val2 = 0
var op = ""
var isVal2 = false

function resizeText() {
  // get the text element
  const textElement = document.getElementById("re-display");

  // store the initial font size
  const initialFontSize = parseFloat(window.getComputedStyle(textElement).fontSize);

  // listen for changes in the text element
  textElement.addEventListener("input", () => {
    // get the current text and count the number of digits
    const currentText = textElement.value;
    const digitCount = (currentText.match(/\d/g) || []).length;

    // adjust the font size based on the number of digits
    if (digitCount > 10 && textElement.style.fontSize !== "10px") {
      textElement.style.fontSize = "10px";
    } else if (digitCount <= 10 && textElement.style.fontSize !== initialFontSize) {
      textElement.style.fontSize = initialFontSize + "px";
    }
  });
}

function equate() {
  if (op != "") {
    resultDisplay.innerHTML = "<th colspan='4'>" + eval(val1.toString() + op + val2.toString()) + "</th>"
    retext = resultDisplay.textContent;
    val1 = retext
    op = ""
    val2 = 0
    isVal2 = false
  }

}
function positive() {
  op = "+"
}
function negative() {
  op = "-"
}
function multiplication() {
  op = "*"
}
function division() {
  op = "/"
}


function dot() {
  if (!retext.includes('.')) {
    resultDisplay.innerHTML = "<th colspan='4'>" + retext.trim() + ".</th>"
    retext = resultDisplay.textContent;
  }
  store()
  //alert(".")
}
function clearText() {
  resultDisplay.innerHTML = "<th colspan= '4'>0</th>"
  retext = resultDisplay.textContent;
  var val1 = 0
  var val2 = 0
  var op = ""
  isVal2 = false
}

function addNum(num) {
  if ((!retext.includes('.') && retext == 0) || (!isVal2 && op != "")) {
    resultDisplay.innerHTML = "<th colspan='4'>" + num + "</th>"
    retext = resultDisplay.textContent;
  } else {
    resultDisplay.innerHTML = "<th colspan='4'>" + retext + num + "</th>"
    retext = resultDisplay.textContent;
  }
  store()
}

function store() {
  if (op == "") {
    val1 = retext
  } else {
    val2 = retext
    isVal2 = true
  }
}








