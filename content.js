// content.js
console.log('Content script loaded');
document.addEventListener('visibilitychange', () => {
  console.log('Visibility changed');
  const video = document.querySelector('video');
  if (video) {
    if (document.hidden) {
      console.log('Pausing video');
      video.pause();
    } else {
      console.log('Playing video');
      video.play();
    }
  }
});
