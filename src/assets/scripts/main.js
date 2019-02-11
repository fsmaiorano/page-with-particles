import Particles from "particlesjs";

class Index {
  constructor() {
    this.initParticles();
    addEventListener("scroll", this.stickyHeader);
  }

  initParticles() {
    window.onload = function() {
      Particles.init({
        // normal options
        selector: ".particles",
        maxParticles: 450,
        color: ["#DA0463", "#404B69", "#DBEDF3"],
        sizeVariations: 9,
        connectParticles: false,
        // options for breakpoints
        responsive: [
          {
            breakpoint: 768,
            options: {
              maxParticles: 200,
              connectParticles: false
            }
          },
          {
            breakpoint: 425,
            options: {
              maxParticles: 100,
              connectParticles: true
            }
          },
          {
            breakpoint: 320,
            options: {
              maxParticles: 0

              // disables particles.js
            }
          }
        ]
      });
    };
    function getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  }

  stickyHeader() {
    if ($(window).scrollTop() >= window.innerHeight) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  }
}

new Index();
