const open = document.getElementById("menu-open");
      const close = document.getElementById("menu-close");
      const header = document.getElementById('header-1');
      const menu01 = document.getElementById('menu01');
      const graySection = document.getElementById('graySection');


      if (window.innerWidth > 500) {
        function showMenu(){
          menu01.style.transform = 'translateY(0vh)';
          menu01.style.opacity = 1;
          graySection.style.transform = 'translateY(-20vh)';
          graySection.style.opacity = 1;
          graySection.style.transitionDelay = '0s';
          graySection.style.borderRadius = 0;
      }
      function hideMenu(){
          menu01.style.transform = 'translateY(100vh)';
          menu01.style.opacity = 0;
          graySection.style.opacity = 0;
          graySection.style.transform = 'translateY(100vh)';
          graySection.style.transitionDelay = '0.5s';
          graySection.style.borderRadius = '60%';
        }
      }else if(window.innerWidth < 500){
        function showMenu(){
          menu01.style.transform = 'translateY(0vh)';
          menu01.style.opacity = 1;
          graySection.style.transform = 'translateY(-20vh)';
          graySection.style.opacity = 1;
          graySection.style.transitionDelay = '0s';
          graySection.style.borderRadius = '0%';

      }
      function hideMenu(){
          // menu01.style.display = 'none';
          menu01.style.transform = 'translateY(100vh)';
          menu01.style.opacity = 0;
          graySection.style.opacity = 0;
          graySection.style.transform = 'translateY(100vh)';
          graySection.style.transitionDelay = '0.5s';
          graySection.style.borderRadius = '0%';
        }
      }
        open.addEventListener('click',showMenu);
        close.addEventListener('click',hideMenu);







const cursorBall = document.querySelector('.cursor-ball');
let mouseX = 0, mouseY = 0;
let ballX = 0, ballY = 0;
const delay = 0.5; // Adjust this value for more or less delay

document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});


// document.querySelectorAll('h1', '#menu-close').forEach(item => {
//     item.addEventListener('mouseenter', () => {
//         cursorBall.classList.add('large');
//     });
//     item.addEventListener('mouseleave', () => {
//         cursorBall.classList.remove('large');
//     });
// });


function animate() {
    // Calculate the ball's position by interpolating towards the mouse position
    ballX += (mouseX - ballX) * delay;
    ballY += (mouseY - ballY) * delay;
    
    cursorBall.style.left = `${ballX}px`;
    cursorBall.style.top = `${ballY}px`;
    
    requestAnimationFrame(animate);
}

animate();