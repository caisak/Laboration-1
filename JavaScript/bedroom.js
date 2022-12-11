
alert("Click the different buttons to look for your cat!");

document.getElementById('bed').onclick = function() {
  bed()
};

function bed() {
  alert("The cat wasn't under the bed :(")
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