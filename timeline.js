window.addEventListener("DOMContentLoaded", loadSVG);

function loadSVG() {
  //console.log("Load the SVG");

  fetch("CV-timeline-color4.svg")
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

      //ukrycie jobdescription na onclick na tekst
      function textClick() {
        textPlace.forEach(element => {
          element.addEventListener("click", jobDescription);
        });
      }

      function jobDescription() {
        let textItem = this.id;
        let jobDescID = "#" + textItem.replace("Place", "jobdesc");
        //console.log(jobDescription);
        let jobDescObject = document.querySelector(jobDescID);
        console.log(jobDescObject);
        if (jobDescObject.classList.contains("visible")) {
          jobDescObject.classList.remove("visible");
        } else {
          jobDescObject.classList.add("visible");
        }

        //alert("click");
      }

      stoneGrey();
      textChangeEllipse();
      textClick();
    });

  function jobDescriptionOff() {
    if (this.classList.contains("visible")) {
      //setTimeout(function() {
      this.classList.remove("visible");
      //}, 3000);
    }
  }

  function Scroll() {
    document.addEventListener("scroll", stoneGreyonscroll);
  }

  function stoneGreyonscroll() {
    let whiteEllipse = document.querySelectorAll(".cls-28");
    whiteEllipse.forEach(element => {
      element.classList.add("stoneGrey");
    });
  }

  Scroll();
}
