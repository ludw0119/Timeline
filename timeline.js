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

      let whiteEllipse = document.querySelectorAll(".cls-41");

      //console.log(whiteEllipse);

      function stoneBigger() {
        whiteEllipse.forEach(element => {
          element.addEventListener("mouseover", whiteEllipseBigger);
          element.addEventListener("mouseout", whiteEllipseSmaller);
        });
      }

      function whiteEllipseBigger() {
        this.classList.add("stoneBigger");
        //alert("mouseover");
      }

      function whiteEllipseSmaller() {
        if (this.classList.contains("stoneBigger")) {
          //setTimeout(function() {
          this.classList.remove("stoneBigger");
          //}, 3000);
        }
      }

      stoneBigger();
    });
}
