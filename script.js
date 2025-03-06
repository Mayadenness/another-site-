// Get the audio element and play button
const audio = document.getElementById('background-audio');
const playButton = document.getElementById('play-button');

// Set the volume to 20% (0.2)
audio.volume = 0.2;

// Enable looping
audio.loop = true;

// Debugging: Log audio status
audio.addEventListener('loadeddata', () => {
  console.log('Audio loaded successfully');
});

audio.addEventListener('error', (e) => {
  console.error('Error loading audio:', e);
});

// Add event listener to the play button
playButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play()
      .then(() => {
        playButton.textContent = '⏸️ Pause';
        console.log('Audio is playing');
      })
      .catch((error) => {
        console.error('Error playing audio:', error);
        alert('Please interact with the page to play audio.');
      });
  } else {
    audio.pause();
    playButton.textContent = 'Press Me!';
    console.log('Audio is paused');
  }
});

// Auto-click the play button once when the site is opened
window.addEventListener('load', () => {
  console.log('Page loaded, simulating click on play button...');
  playButton.click();
});