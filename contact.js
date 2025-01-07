function updateTime() {
    const now = new Date();
    
    // Format time with hours, minutes, and seconds (no timezone)
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    };
    
    const formattedTime = new Intl.DateTimeFormat('en-US', options).format(now);
    
    // Display the time
    document.getElementById('datetime').textContent = formattedTime;
}

setInterval(updateTime, 1000);
updateTime();




// HIDING FORMS
// const hr1 = document.getElementById("hr-1");
// const hr2 = document.getElementById("hr-2");
// const head1 = document.getElementById("head-1");
// const head2 = document.getElementById("head-2");
// const hidingForm = document.getElementById("hiding");


// head2.addEventListener("click" , function(){
//     hr1.style.opacity = 0;
//     hr2.style.opacity = 1;
//     head2.style.color = "#e0eeee";
//     head1.style.color = "#798081";
//     hidingForm.style.display = "block";
// });


// head1.addEventListener("click" , function(){
//     hr1.style.opacity = 1;
//     hr2.style.opacity = 0;
//     head2.style.color = "#798081";
//     head1.style.color = "#e0eeee";
//     hidingForm.style.display = "none";
// });












//  GSAP      

gsap.registerPlugin(ScrollTrigger);



if (window.innerWidth > 500) {


    gsap.to(".h-about", {
        scrollTrigger: {
            trigger: ".section-4",
            start: "0% 80%",
            end: "20% 40%",
            scrub: true,
        },
        x: 0,
    });
    gsap.to(".h-about", {
        scrollTrigger: {
            trigger: ".section-4",
            start: "0% 100%",
            end: "20% 30%",
            scrub: true,
        },
        background: "linear-gradient(to right, #c3e2ef 100%, #222222 0%)",
        onUpdate: function () {
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




    gsap.to(".f-p1", {
        scrollTrigger: {
            trigger: ".section-4",
            start: "20% 80%",
            end: "40% 50%",
            scrub: true,
        },
        y: 0,
        opacity: 1,
    });
    gsap.to(".f-p02", {
        scrollTrigger: {
            trigger: ".section-4",
            start: "40% 80%",
            end: "60% 50%",
            scrub: true,
        },
        y: 0,
        opacity: 1,
    });
    gsap.to(".f-p3", {
        scrollTrigger: {
            trigger: ".section-4",
            start: "60% 80%",
            end: "80% 50%",
            scrub: true,
        },
        y: 0,
        opacity: 1,
    });
    gsap.to(".f-p4", {
        scrollTrigger: {
            trigger: ".section-4",
            start: "80% 80%",
            end: "100% 70%",
            scrub: true,
        },
        y: 0,
        opacity: 1,
    });





} else if (window.innerWidth < 500) {



    gsap.to(".h-about", {
        scrollTrigger: {
            trigger: ".section-4",
            start: "0% 80%",
            end: "20% 40%",
            scrub: true,
        },
        x: 0,
    });
    gsap.to(".h-about", {
        scrollTrigger: {
            trigger: ".section-4",
            start: "0% 100%",
            end: "20% 40%",
            scrub: true,
        },
        background: "linear-gradient(to right, #c3e2ef 100%, #222222 0%)",
        onUpdate: function () {
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




    gsap.to(".f-p1", {
        scrollTrigger: {
            trigger: ".section-4",
            start: "20% 80%",
            end: "40% 50%",
            scrub: true,
        },
        y: 0,
        opacity: 1,
    });
    gsap.to(".f-p02", {
        scrollTrigger: {
            trigger: ".section-4",
            start: "40% 80%",
            end: "60% 50%",
            scrub: true,
        },
        y: 0,
        opacity: 1,
    });
    gsap.to(".f-p3", {
        scrollTrigger: {
            trigger: ".section-4",
            start: "60% 80%",
            end: "80% 50%",
            scrub: true,
        },
        y: 0,
        opacity: 1,
    });
    gsap.to(".f-p4", {
        scrollTrigger: {
            trigger: ".section-4",
            start: "80% 80%",
            end: "100% 70%",
            scrub: true,
        },
        y: 0,
        opacity: 1,
    });

}


document.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector(".text-wrapper");
    var lightEffect = container.querySelector(".footer_cursor-light"); // Ensure it's selected within .text-wrapper

    function updateTorchPosition(x, y) {
        if (lightEffect) {
            lightEffect.style.setProperty('--x', `${x}px`);
            lightEffect.style.setProperty('--y', `${y}px`);
        }
    }

    function handleMouseMove(e) {
        var rect = container.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        updateTorchPosition(x, y);
    }

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchmove', handleMouseMove);
    container.addEventListener('touchstart', handleMouseMove);
});
