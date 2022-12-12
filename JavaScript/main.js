addEventListener('DOMContentLoaded', main);

//Program starts here
function main() {
setUserName();

}

//user sets username and can change it
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome home, ${myName}`;
    }
}

myButton.onclick = () => {
    setUserName();
}