const videoBoxes = document.querySelectorAll('.boxes');
const videos = document.querySelectorAll('.video-s3');

if(window.innerWidth > 500){ 
  // Loop through each video box and attach event listeners
  videoBoxes.forEach((videoBox, index) => {
    const video = videos[index]; // Get the corresponding video
    
  // Play video on hover
  videoBox.addEventListener('mouseenter', function() {
    video.play();
    video.muted = true; // Muted to avoid autoplay issues
    video.loop = true;  // Loop to play continuously
  });
  
  // Pause video when hover ends
  videoBox.addEventListener('mouseleave', function() {
    video.pause();
  });
});

}else if (window.innerWidth < 500) {
  videoBoxes.forEach((videoBox, index) => {
    const video = videos[index]; // Get the corresponding video
    video.play();
    video.muted = true; // Muted to avoid autoplay issues
    video.loop = true;  // Loop to play continuously
});
}