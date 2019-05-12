window.addEventListener("DOMContentLoaded", loadSVG);

function loadSVG() {
  //console.log("Load the SVG");

  fetch("CV-timeline-color3.svg")
    .then(response => response.text())
    .then(svgdata => {
      //console.log("The SVG data is:");
      //console.log(svgdata);
      document
        .querySelector("#svg_timeline")
        .insertAdjacentHTML("afterbegin", svgdata);

      let whiteEllipse = document.querySelectorAll(".cls-28");
      let textPlace = document.querySelectorAll(".cls-29");
      //console.log(whiteEllipse);

      function stoneGrey() {
        whiteEllipse.forEach(element => {
          element.addEventListener("mouseover", whiteEllipseGrey);
          //element.addEventListener("mouseover", functionalert);
          element.addEventListener("mouseout", whiteEllipseGreyOff);
        });
      }

      /*function functionalert() {
        alert("this is alert");
      }*/

      function whiteEllipseGrey() {
        this.classList.add("stoneGrey");
        //alert("mouseover")
      }

      function whiteEllipseGreyOff() {
        if (this.classList.contains("stoneGrey")) {
          //setTimeout(function() {
          this.classList.remove("stoneGrey");
          //}, 3000);
        }
      }

      function textChangeEllipse() {
        textPlace.forEach(element => {
          element.addEventListener("mouseover", txtHoverEllipseGrey);
        });
      }

      function txtHoverEllipseGrey() {
        //alert("mouseover");
        //console.log(this.id);
        let textItem = this.id;
        let ellipse = "#" + textItem.replace("Place", "whiteEl");
        let ellipseObject = document.querySelector(ellipse);
        //textObject = document.querySelector(textItem);
        //console.log("text" + textObject);
        ellipseObject.classList.add("stoneGrey");

        this.style.color = "pink";
      }

      stoneGrey();
      textChangeEllipse();
    });
}
