const videoContainer = document.querySelector('.gym__video-container');
const buttonPlay = videoContainer.querySelector('button');
const videoBlock = document.querySelector('.gym__video-container iframe');

const clickOnVideo = () => {
  videoBlock.style.zIndex = 10002;
  videoBlock.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
};

const playVideo = () => {
  buttonPlay.addEventListener('click', () => {
    clickOnVideo();
  });

  videoContainer.addEventListener('click', () => {
    clickOnVideo();
  });
};

export default playVideo;
