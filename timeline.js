window.addEventListener("DOMContentLoaded", loadSVG);

function loadSVG() {
  //console.log("Load the SVG");

  fetch("CV-timeline-color.svg")
    .then(response => response.text())
    .then(svgdata => {
      //console.log("The SVG data is:");
      //console.log(svgdata);
      document
        .querySelector("#svg_timeline")
        .insertAdjacentHTML("afterbegin", svgdata);
    });
  //setTimeout(position, 1000);
  setTimeout(datesPosition, 1000);
  setTimeout(placesPosition, 1000);
  //setTimeout(fitText("#whiteElipses #whiteEl10", "#divText1"), 3000);
}

/*function fitText(svgElementSource, htmlElementSource) {
  svgElement = document.querySelector(svgElementSource);
  htmlElement = document.querySelector(htmlElementSource);

  console.log(svgElement);
  htmlElement.style.left = svgElement.getAttribute("x") + "px"; //this "+px" is a string concatenation to get a nr of pixels in a right syntax
  htmlElement.style.top = svgElement.getAttribute("y") + "px";
  htmlElement.style.width = svgElement.getAttribute("width") + "px";
  htmlElement.style.height = svgElement.getAttribute("height") + "px";
}*/

/*function position() {
  const elipse = document.querySelector("#Bubble1");
  const rect = elipse.getBoundingClientRect(); //The Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.

  const htmlElement = document.querySelector("#divText1");
  htmlElement.style.left = rect.left + 10 + "px"; //this "+px" is a string concatenation to get a nr of pixels in a right syntax
  htmlElement.style.top = rect.top + 20 + "px";
  htmlElement.style.color = "pink";
  htmlElement.style.position = "absolute";
}*/

function datesPosition() {
  const ellipses = document.querySelectorAll(".bubbles");

  for (let i = 1; i <= ellipses.length; i++) {
    let bubbleId = "#Bubble" + i;
    let divId = "#divText" + i;
    let elipse = document.querySelector(bubbleId);
    let rect = elipse.getBoundingClientRect(); //The Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.

    let htmlElement = document.querySelector(divId);
    htmlElement.style.left = rect.left + 5 + "px"; //this "+px" is a string concatenation to get a nr of pixels in a right syntax
    htmlElement.style.top = rect.top + 20 + "px";
    htmlElement.style.position = "absolute";
  }
}

function placesPosition() {
  const ellipses = document.querySelectorAll(".bubbles");

  for (let i = 1; i <= ellipses.length; i++) {
    let bubbleId = "#Bubble" + i;
    //let divId = "#divText" + i;
    let divPlaceId = "#divPlaceText" + i;
    let elipse = document.querySelector(bubbleId);
    let rect = elipse.getBoundingClientRect(); //The Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.

    let htmlElement2 = document.querySelector(divPlaceId);
    if (i % 2 == 0) {
      //left bubble
      htmlElement2.style.left = rect.left + 165 + "px"; //this "+px" is a string concatenation to get a nr of pixels in a right syntax
      htmlElement2.style.top = rect.top + 20 + "px";
      htmlElement2.style.position = "absolute";
    } else {
      //right bubble
      htmlElement2.style.left = rect.left - 165 + "px"; //this "+px" is a string concatenation to get a nr of pixels in a right syntax
      htmlElement2.style.top = rect.top + 20 + "px";
      htmlElement2.style.position = "absolute";
    }
  }
}
