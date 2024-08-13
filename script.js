const playButton = document.getElementById('play-button');
const popupVideoContainer = document.getElementById('popup-video-container');
const closeButton = document.getElementById('close-button');
const mediaVideo = document.getElementById('media-video');

playButton.addEventListener('click', () => {
    popupVideoContainer.style.display = 'flex';
    mediaVideo.play();
});

closeButton.addEventListener('click', () => {
    popupVideoContainer.style.display = 'none';
    mediaVideo.pause();
});