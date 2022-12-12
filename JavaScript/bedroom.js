
alert("Click the different buttons to look for your cat!");

// alerts for when the buttons are clicked
document.getElementById('bed').onclick = function() {
  bed()
};

function bed() {
  alert("The cat wasn't under the bed :( but you could probably make a cat out of all this dust.")
}

document.getElementById('covers').onclick = function() {
  covers()
};

function covers() {
  alert("The cat wasn't under the covers :(")
}

document.getElementById('closet').onclick = function() {
  closet()
};

function closet() {
  alert("The cat wasn't inside the closet :(")
}