/* eslint-disable no-use-before-define */
const play = () => {
  const audioMusic = new Audio();
  const playBtnMusic = document.querySelector('.play-music');

  audioMusic.src = './assets/audio/audio.mp3';

  playBtnMusic!.addEventListener('click', playAudio);
  playBtnMusic!.addEventListener('click', toggleBtn);
  window.addEventListener('click', getLocalStorage);

  function playAudio() {
    if (audioMusic.paused || audioMusic.ended) {
      audioMusic.play();
    } else {
      audioMusic.pause();
    }
  }

  function toggleBtn() {
    const playBtn = playBtnMusic!.classList.toggle('pause');
    const playBtnString = playBtn.toString();

    localStorage.setItem('play', playBtnString);
  }

  function getLocalStorage() {
    if (localStorage.getItem('play')) {
      const checkPlay = localStorage.getItem('play');

      if (checkPlay === 'true') {
        audioMusic.play();
        playBtnMusic!.classList.add('pause');
      }
    }
  }
};

export default play;
