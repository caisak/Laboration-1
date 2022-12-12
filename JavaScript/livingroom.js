
alert("Click the different buttons to look for your cat!");

// alerts for when the buttons are clicked
document.getElementById('couch').onclick = function() {
  couch()
};

function couch() {
  alert("The cat wasn't on the couch :( probably because you're not there to snuggle it.")
}

document.getElementById('bookcase').onclick = function() {
  bookcase()
};

function bookcase() {
  alert("The cat wasn't anywhere in the bookcase :( but the stapler has been knocked down. It's not fair to blame the cat though, it was probably a ghost.")
}

document.getElementById('tv').onclick = function() {
  tv()
};

function tv() {
  alert("The cat wasnt behind the TV :( but the power cable has been chewed, so it's definitely been here.")
}