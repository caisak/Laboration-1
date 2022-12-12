
alert("Click the different buttons to look for your cat!");

// alerts for when the buttons are clicked
document.getElementById('cabinets').onclick = function() {
  cabinets()
};

function cabinets() {
  alert("The cat wasn't on top of the cabinets :( strange, the cat loves hanging out there.")
}

document.getElementById('chair').onclick = function() {
  chair()
};

function chair() {
  alert("The cat wasn't on the chair :(")
}

document.getElementById('box').onclick = function() {
  box()
  alert("Hmm, this box sounds kind of weird...")
};

function box() {
  document.getElementById('box').innerHTML = "Congratulations! You found your cat!";
  document.getElementById('box').style.color = 'white';
  document.getElementById('box').style.backgroundColor = 'hotpink';
  
}




