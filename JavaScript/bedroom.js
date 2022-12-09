
const myImage = document.getElementById("closet-closed");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/closet-closed.png");
  } else {
    myImage.setAttribute("src", "images/closet-open.png");
  }
};
