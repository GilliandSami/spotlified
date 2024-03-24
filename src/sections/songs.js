import { loadSongs, loadSearch, loadLyrics } from "../api";
import { setItem, getItem, getItems, removeItem } from "../local-storage.js";
import { playSong } from "./player.js";

const listSectionTitle = document.querySelector('#list-section h4');
const songList = document.querySelector('.list');

function displaySongsArray(songs) {
    songList.innerHTML = '';

    songs.forEach((song) => {
        const songElement = document.createElement('song-item');

        songElement.setAttribute('title', song.title);
        songElement.setAttribute('favorite', !!getItem(song.id));
        songElement.setAttribute('href', `#songs-${song.id}`);

        songElement.addEventListener('play_click', () => {
            const isPlaying = songElement.getAttribute('playpause') == 'true';
            songElement.setAttribute('playpause', String(!isPlaying));
            playSong(song, songs);
        });

        songElement.addEventListener('favorite_click', () => {
            if (getItem(song.id)) {
                removeItem(song.id);
            } else {
                setItem(song.id, song);
            }

            songElement.setAttribute('favorite', !!getItem(song.id));
        })

        songList.insertAdjacentElement('afterbegin', songElement);
    });
}

function displayArtistsSongs(id) {
    loadSongs(id).then((songs) => {
        listSectionTitle.innerHTML = ` Artistes > ${songs[0].artist.name}`
        displaySongsArray(songs)
    })
}

function displaySearchSongs(query) {
    loadSearch(query).then((songs) => {
        listSectionTitle.innerHTML = `Votre Recherche`;
        displaySongsArray(songs);
    })
}

function displayFavoriteSongs() {
    const allSongs = getItems();

    listSectionTitle.innerHTML = 'Favoris';
    displaySongsArray(allSongs);
}

function displayLyrics(id) {
    loadLyrics(id).then((song) => {
        const nomArtiste = document.querySelector(`#lyrics-section h5`);
        const nomSong = document.querySelector('#lyrics-section h4');
        const lyrics = document.querySelector('#lyrics-section p');

        nomArtiste.innerHTML = song.title;
        nomSong.innerHTML = song.artist.name;
        lyrics.innerHTML = song.lyrics;
    })
}

export { displayArtistsSongs, displaySearchSongs, displayFavoriteSongs, displayLyrics }