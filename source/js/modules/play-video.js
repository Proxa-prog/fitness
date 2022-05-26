const videoContainer = document.querySelector('.gym__video-container');
const buttonPlay = videoContainer.querySelector('button');
const videoBlock = document.querySelector('.gym__video-container iframe');

const playVideo = () => {
  buttonPlay.addEventListener('click', () => {
    videoBlock.style.zIndex = 10002;
    console.log(videoBlock.src += "?autoplay=1");
    videoBlock.src += "&autoplay=1"

  });
};

export default playVideo;
