import formatTimestamp from '../lib/formatTimestamp';

const audioPlayer = document.querySelector('#audio-player');

const playerThumbnail = document.querySelector('#player-thumbnail-image');
const playerSongTitle = document.querySelector('#player-infos-song-title');
const playerArtistName = document.querySelector('#player-infos-artist-name');

const playerPrev = document.querySelector('#player-control-previous')
const playerPlay = document.querySelector('#player-control-play')
const playerPlayIcon = document.querySelector('#player-control-play .material-icons')
const playerNext = document.querySelector('#player-control-next')

const playerTimeCurrent = document.querySelector('#player-time-current')
const playerTimeDuration = document.querySelector('#player-time-duration')
const playerProgress = document.querySelector('#player-progress-bar')

////////////////////////////////////////////////////////////////////////////////////////////////7

let currentSongList = [];
let currentSong = null;

function playSong(song, songs) {
    currentSong = song;
    playerPlayIcon.innerHTML = 'pause';

    if (songs) {
        currentSongList = songs;
    }

    playerSongTitle.innerHTML = song.title;
    playerArtistName.innerHTML = song.artist.name;
    playerThumbnail.src = song.artist.image_url;

    audioPlayer.src = song.audio_url;
    audioPlayer.play();
}

playerPlay.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playerPlayIcon.innerHTML = 'pause';
    } else {
        audioPlayer.pause();
        playerPlayIcon.innerHTML = 'play_arrow';
    }
})

playerPrev.addEventListener('click', () => {
    let index = currentSongList.indexOf(currentSong) - 1;

    if (index == -1) {
        index = currentSongList.length - 1;
    }

    playSong(currentSongList[index]);
})

playerNext.addEventListener('click', () => {
    let index = currentSongList.indexOf(currentSong) + 1;

    if (index == currentSongList.length) {
        index = 0;
    }

    playSong(currentSongList[index]);
})

// La fonction met à jour le point de lecture de l'audio pour correspondre à la position sélectionnée par l'utilisateur sur la barre de progression (range), permettant ainsi de sauter à différents points de la piste audio.
playerProgress.addEventListener('change', (event) => {
    audioPlayer.currentTime = event.currentTarget.value;
})

// Cette fonction ajuste la valeur maximale de la barre de progression et affiche la durée totale de l'audio lorsque la durée de ce dernier change, assurant que la barre reflète la longueur exacte de la piste et que l'utilisateur voit la durée totale mise à jour.
audioPlayer.addEventListener('durationchange', () => {
    playerProgress.max = audioPlayer.duration;
    playerTimeDuration.innerText = formatTimestamp(audioPlayer.duration);
})


// Cette fonction met à jour la position de la barre de progression et l'affichage du temps écoulé en fonction du moment actuel de la piste audio, gardant ainsi l'interface utilisateur synchronisée avec la lecture.
audioPlayer.addEventListener('timeupdate', () => {
    playerProgress.value = audioPlayer.currentTime;
    playerTimeCurrent.innerText = formatTimestamp(audioPlayer.currentTime);
})

export { playSong }