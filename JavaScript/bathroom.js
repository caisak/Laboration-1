
alert("Click the different buttons to look for your cat!");

document.getElementById('shower').onclick = function() {
  shower()
};

function shower() {
  alert("The cat wasn't in the shower :(")
}

document.getElementById('litterbox').onclick = function() {
  litterbox()
};

function litterbox() {
  alert("The cat wasn't inside the litterbox :( but there's a lot of poop here, you should probably clean that up. ")
}

document.getElementById('laundry').onclick = function() {
  laundry()
};

function laundry() {
  alert("The cat wasn't inside the laundry hamper :( you really need to do your laundry though.")
}