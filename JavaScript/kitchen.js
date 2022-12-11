
alert("Click the different buttons to look for your cat!");

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
};

function box() {
  alert("CONGRATULATIONS YOU FOUND YOUR CAT NOW SNUGGLE IT")
}