    gsap.registerPlugin(ScrollTrigger);
    

    if (window.innerWidth > 500) {
      gsap.to(".video-in", {
        scrollTrigger: {
          trigger: ".btn-vids",
          start: "top 50%",
          end: "bottom 0%",
          scrub: true,
        },  
        width: "88vw",
        heigth: "auto",
        borderRadius: "35px",
        y: "70vh",
        ease: "sine.inOut",
      });




      
      gsap.to(".service-h", {
      scrollTrigger: {
        trigger: ".section-4",
        start: "0% 80%",
        end: "20% 50%",
        scrub: true,
      },
      x: 0,
    });
gsap.to(".service-h", {
  scrollTrigger: {
    trigger: ".section-4",
    start: "0% 90%",
    end: "20% 40%",
    scrub: true,
  },
  background: "linear-gradient(to right, #c3e2ef 100%, #222222 0%)",
  onUpdate: function() {
    document.getElementById("service-h").style.webkitBackgroundClip = "text";
    document.getElementById("service-h").style.backgroundClip = "text";
    document.getElementById("service-h").style.webkitTextFillColor = "transparent";
    document.getElementById("service-h").style.color = "transparent";
},
});
      gsap.to(".paraa-btn", {
        scrollTrigger: {
          trigger: ".services",
          start: "15% 50%",
          end: "25% 50%",
          scrub: true,
        }, 
        y: "7vh",
        opacity: 1,
      });
      
      gsap.to(".about-para", {
        scrollTrigger: {
          trigger: ".about-para",
          start: "top 90%",
          end: "top 100%",
          scrub: true,
        }, 
        y: "0vh",
        opacity: 1,
      });
      gsap.to(".about-para-2", {
        scrollTrigger: {
          trigger: ".about-para-2",
          start: "top 90%",
          end: "top 100%",
          scrub: true,
        }, 
        y: "0vh",
        opacity: 1,
      });
      gsap.to(".a-btn", {
        scrollTrigger: {
          trigger: ".a-btn",
          start: "top 90%",
          end: "top 100%",
          scrub: true,
        }, 
        y: "0vh",
        opacity: 1,
      });


      gsap.to(".card-1", {
        scrollTrigger: {
          trigger: ".acheive",
          start: "-10% 90%",
          end: "30% center",
          scrub: true,
          // markers:true
        },
        x: 0 ,
        rotate: 0,
        opacity: 1,
      });
      gsap.to(".card-2", {
        scrollTrigger: {
          trigger: ".acheive",
          start: "20% 90%",
          end: "30% center",
          scrub: true,
        },
        x: 0 ,
        rotate: 0,
        opacity: 1,
      });
      gsap.to(".card-3", {
        scrollTrigger: {
          trigger: ".acheive",
          start: "40% 90%",
          end: "50% center",
          scrub: true,
        },
        x: 0 ,
        rotate: 0,
        opacity: 1,
      });
      gsap.to(".card-4", {
        scrollTrigger: {
          trigger: ".acheive",
          start: "70% 90%",
          end: "80% center",
          scrub: true,
        },
        x: 0 ,
        rotate: 0,
        opacity: 1,
      });



      gsap.to(".content-cont-1", {
        scrollTrigger: {
          trigger: ".serv-container",
          start: "0% 75%",
          end: "20% 60%",
          scrub: true,
        },
        y: "0vh" ,
        opacity: 1,
      });
      gsap.to(".content-cont-2", {
        scrollTrigger: {
          trigger: ".serv-container",
          start: "30% 75%",
          end: "50% 60%",
          scrub: true,
        },
        y: "0vh" ,
        opacity: 1,
      });
      gsap.to(".content-cont-3", {
        scrollTrigger: {
          trigger: ".serv-container",
          start: "60% 75%",
          end: "80% 60%",
          scrub: true,
        },
        y: "10vh" ,
        opacity: 1,
      });


    
      gsap.to(".visa", {
        scrollTrigger: {
          trigger: ".serv-container",
          start: "0% 90%",
          end: "20% 60%",
          scrub: true,
        },
        x: 0 ,
        rotate: 0,
        opacity: 1,
      });
      gsap.to(".truck", {
        scrollTrigger: {
          trigger: ".serv-container",
          start: "30% 90%",
          end: "50% 60%",
          scrub: true,
        },
        x: 0 ,
        rotate: 0,
        opacity: 1,
      });
      gsap.to(".software", {
        scrollTrigger: {
          trigger: ".serv-container",
          start: "60% 90%",
          end: "80% 60%",
          scrub: true,
        },
        x: 0 ,
        rotate: 0,
        opacity: 1,
      });






      gsap.to(".h-about", {
      scrollTrigger: {
        trigger: ".section-6",
        start: "0% 80%",
        end: "20% 40%",
        scrub: true,
      },
      x: 0,
    });
gsap.to(".h-about", {
  scrollTrigger: {
    trigger: ".section-6",
    start: "0% 100%",
    end: "20% 30%",
    scrub: true,
  },
  background: "linear-gradient(to right, #c3e2ef 100%, #222222 0%)",
  onUpdate: function() {
    document.getElementById("h-about").style.webkitBackgroundClip = "text";
    document.getElementById("h-about").style.backgroundClip = "text";
    document.getElementById("h-about").style.webkitTextFillColor = "transparent";
    document.getElementById("h-about").style.color = "transparent";
    document.getElementById("h-about-1").style.webkitBackgroundClip = "text";
    document.getElementById("h-about-1").style.backgroundClip = "text";
    document.getElementById("h-about-1").style.webkitTextFillColor = "transparent";
    document.getElementById("h-about-1").style.color = "transparent";
},
});



















    }else if(window.innerWidth < 500){







      gsap.to(".paraa-btn", {
        scrollTrigger: {
          trigger: ".services",
          start: "15% 75%",
          end: "20% 75%",
          scrub: true,
        }, 
        y: "4vh",
        opacity: 1,
      });
      gsap.to(".about-para", {
        scrollTrigger: {
          trigger: ".about-para",
          start: "top 85%",
          end: "top 100%",
          scrub: true,
        }, 
        y: "0vh",
        opacity: 1,
      });
      gsap.to(".about-para-2", {
        scrollTrigger: {
          trigger: ".about-para-2",
          start: "30% 90%",
          end: "30% 100%",
          scrub: true,
        }, 
        y: "0vh",
        opacity: 1,
      });
      gsap.to(".a-btn", {
        scrollTrigger: {
          trigger: ".a-btn",
          start: "30% 95%",
          end: "30% 100%",
          scrub: true,
        }, 
        y: "0vh",
        opacity: 1,
      });


      gsap.to(".card-1", {
        scrollTrigger: {
          trigger: ".acheive",
          start: "-10% 90%",
          end: "10% center",
          scrub: true,
          // markers:true
        },
        x: 0 ,
        rotate: 0,
        opacity: 1,
      });
      gsap.to(".card-2", {
        scrollTrigger: {
          trigger: ".acheive",
          start: "70% 90%",
          end: "50% 30%",
          scrub: true,
        },
        x: 0 ,
        rotate: 0,
        opacity: 1,
      });
      gsap.to(".card-3", {
        scrollTrigger: {
          trigger: ".acheive",
          start: "30% 90%",
          end: "30% center",
          scrub: true,
        },
        x: 0 ,
        rotate: 0,
        opacity: 1,
      });
      gsap.to(".card-4", {
        scrollTrigger: {
          trigger: ".acheive",
          start: "90% 90%",
          end: "80% center",
          scrub: true,
        },
        x: 0 ,
        rotate: 0,
        opacity: 1,
      });



      gsap.to(".content-cont-1", {
        scrollTrigger: {
          trigger: ".serv-container",
          start: "10% 75%",
          end: "15% 60%",
          scrub: true,
        },
        y: "0vh" ,
        opacity: 1,
      });
      gsap.to(".content-cont-2", {
        scrollTrigger: {
          trigger: ".serv-container",
          start: "45% 75%",
          end: "50% 60%",
          scrub: true,
        },
        y: "0vh" ,
        opacity: 1,
      });
      gsap.to(".content-cont-3", {
        scrollTrigger: {
          trigger: ".serv-container",
          start: "80% 75%",
          end: "85% 60%",
          scrub: true,
        },
        y: "0vh" ,
        opacity: 1,
      });


    
      gsap.to(".visa", {
        scrollTrigger: {
          trigger: ".serv-container",
          start: "0% 90%",
          end: "10% 60%",
          scrub: true,
          
        },
        x: 0 ,
        opacity: 1,
      });
      gsap.to(".truck", {
        scrollTrigger: {
          trigger: ".serv-container",
          start: "35% 90%",
          end: "45% 60%",
          scrub: true,
        },
        x: 0 ,
        opacity: 1,
      });
      gsap.to(".software", {
        scrollTrigger: {
          trigger: ".serv-container",
          start: "65% 90%",
          end: "80% 60%",
          scrub: true,
        },
        x: 0 ,
        opacity: 1,
      });

      gsap.to(".btn-s", {
        scrollTrigger: {
          trigger: ".serv-container",
          start: "90% 90%",
          end: "100% 60%",
          scrub: true,
        }, 
        y: 0,
        opacity: 1,
      });



      
      gsap.to(".h-about", {
      scrollTrigger: {
        trigger: ".section-6",
        start: "0% 80%",
        end: "20% 40%",
        scrub: true,
      },
      x: 0,
    });
gsap.to(".h-about", {
  scrollTrigger: {
    trigger: ".section-6",
    start: "0% 100%",
    end: "20% 30%",
    scrub: true,
  },
  background: "linear-gradient(to right, #c3e2ef 100%, #222222 0%)",
  onUpdate: function() {
    document.getElementById("h-about").style.webkitBackgroundClip = "text";
    document.getElementById("h-about").style.backgroundClip = "text";
    document.getElementById("h-about").style.webkitTextFillColor = "transparent";
    document.getElementById("h-about").style.color = "transparent";
    document.getElementById("h-about-1").style.webkitBackgroundClip = "text";
    document.getElementById("h-about-1").style.backgroundClip = "text";
    document.getElementById("h-about-1").style.webkitTextFillColor = "transparent";
    document.getElementById("h-about-1").style.color = "transparent";
},
});






gsap.to(".service-h", {
      scrollTrigger: {
        trigger: ".section-4",
        start: "0% 80%",
        end: "20% 50%",
        scrub: true,
      },
      x: 0,
    });
gsap.to(".service-h", {
  scrollTrigger: {
    trigger: ".section-4",
    start: "0% 90%",
    end: "20% 40%",
    scrub: true,
  },
  background: "linear-gradient(to right, #c3e2ef 100%, #222222 0%)",
  onUpdate: function() {
    document.getElementById("service-h").style.webkitBackgroundClip = "text";
    document.getElementById("service-h").style.backgroundClip = "text";
    document.getElementById("service-h").style.webkitTextFillColor = "transparent";
    document.getElementById("service-h").style.color = "transparent";
},
});

}