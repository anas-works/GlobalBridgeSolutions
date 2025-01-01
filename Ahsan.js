gsap.registerPlugin(ScrollTrigger);

tl = gsap.timeline();

gsap.to('.image1', {
    scrollTrigger: {
        trigger: '.image1',
        start: 'top 70%',
        end: 'top 20%',
        scrub: 1,
        ease: "power3.inOut",
        onEnter: () => {
            port_text.style.transition = 'transform 1000ms';
        },
    },
    duration: 2,
    rotation: -30,
    x: -400,
});

tl.to('.image2', {
    scrollTrigger: {
        trigger: '.image2',
        start: 'top 90%',
        end: 'top 20%',
        scrub: 1,
        ease: "power3.inOut",
        onEnter: () => {
            port_text.style.transition = 'transform 1000ms';
        },
    },
    duration: 2,
    rotation: -30,
    x: -400,
});

tl.to('.image3', {
    scrollTrigger: {
        trigger: '.image3',
        start: 'top 90%',
        end: 'top 20%',
        scrub: 1,
        ease: "power3.inOut",
        onEnter: () => {
            port_text.style.transition = 'transform 1000ms';
        },
    },
    duration: 2,
    rotation: -30,
    x: -400,
});

gsap.to('.image4', {
    scrollTrigger: {
        trigger: '.image4',
        start: 'top 70%',
        end: 'top 20%',
        scrub: 1,
        ease: "power3.inOut",
        onEnter: () => {
            port_text.style.transition = 'transform 1000ms';
        },
    },
    duration: 2,
    rotation: 30,
    x: 400,
});

tl.to('.image5', {
    scrollTrigger: {
        trigger: '.image5',
        start: 'top 90%',
        end: 'top 20%',
        scrub: 1,
        ease: "power3.inOut",
        onEnter: () => {
            port_text.style.transition = 'transform 1000ms';
        },
    },
    duration: 2,
    rotation: 30,
    x: 400,
});

tl.to('.image6', {
    scrollTrigger: {
        trigger: '.image6',
        start: 'top 90%',
        end: 'top 20%',
        scrub: 1,
        ease: "power3.inOut",
        onEnter: () => {
            port_text.style.transition = 'transform 1000ms';
        },
    },
    duration: 2,
    rotation: 30,
    x: 400,
});

let port_text = document.querySelector(".port_content");

gsap.from('.port_content', {
    scrollTrigger: {
        trigger: '.port_content',
        start: 'top 60%',
        end: 'top 20%',
        scrub: 1,
        ease: "power2.out",
        onEnter: () => {
            port_text.style.display = 'flex';
            port_text.style.transition = 'transform 1s';
        },
        onLeaveBack: () => {
            port_text.style.display = 'none';
        }
    },
    duration: 1,
    opacity: 0,
    y: 20,
});

// Smooth Animations for Text
gsap.from('#my_p1', {
    scrollTrigger: {
        trigger: '#my_p1',
        start: 'top 70%',
        end: 'top 40%',
        scrub: 1,
        ease: "power2.out",
    },
    filter: "blur(5px)",
    duration: 1,
    opacity: 0,
    x: -50,
});

gsap.from('#my_p2', {
    scrollTrigger: {
        trigger: '#my_p2',
        start: 'top 70%',
        end: 'top 40%',
        scrub: 1,
        ease: "power2.out",
    },
    filter: "blur(5px)",
    duration: 1,
    opacity: 0,
    x: 50,
});

gsap.from('#my_p3', {
    scrollTrigger: {
        trigger: '#my_p3',
        start: 'top 70%',
        end: 'top 40%',
        scrub: 1,
        ease: "power2.out",
    },
    filter: "blur(5px)",
    duration: 1,
    opacity: 0,
    x: -50,
});


// Background Animation
function createMeteor() {
    const meteor = document.createElement('div');
    meteor.classList.add('meteor');

    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight - 100;

    meteor.style.left = `${startX}px`;
    meteor.style.top = `${startY}px`;

    document.querySelector('.background-container').appendChild(meteor);

    gsap.to(meteor, {
        x: -60 - startX,
        y: 600 - startY,
        duration: Math.random() * 1 + 1,
        opacity: 1,
        ease: "power4.out",
        onComplete: () => {
            meteor.remove();
        }
    });
}

setInterval(createMeteor, 600);

gsap.from('#timeTo', {
    scrollTrigger: {
        trigger: '#timeTo',
        start: 'top 100%',
        end: 'top 60%',
        scrub: 1,
    },
    filter: "blur(5px)",
    opacity: 0,
    x: -100,
    duration: 0.5,
});

gsap.from('#roar', {
    scrollTrigger: {
        trigger: '#roar',
        start: 'top 100%',
        end: 'top 60%',
        scrub: 1,
    },
    filter: "blur(5px)",
    opacity: 0,
    x: 100,
    duration: 0.5,
});

gsap.from('#my_hr0', {
    scrollTrigger: {
        trigger: '#my_hr0',
        start: 'top 120%',
        end: 'top 60%',
        scrub: 1,
        ease: "power2.out",
    },
    filter: "blur(5px)",
    opacity: 0,
    duration: 0.5,
});

gsap.from('.infoContainer', {
    scrollTrigger: {
        trigger: '.infoContainer',
        start: 'top 120%',
        end: 'top 60%',
        scrub: 1,
        ease: "power2.out",
    },
    filter: "blur(5px)",
    opacity: 0,
    duration: 0.5,
});

gsap.from('#my_hr', {
    scrollTrigger: {
        trigger: '#my_hr',
        start: 'top 120%',
        end: 'top 60%',
        scrub: 1,
        ease: "power2.out",
    },
    filter: "blur(5px)",
    opacity: 0,
    y: 100,
    duration: 0.5,
});



            function scrollToTop() {
                window.scrollTo({top: 0, behavior: 'smooth'});
            }