import './elements/artist-cover.js';
import './elements/song-item.js';

import { displayArtists } from './sections/artists.js';
import { displayArtistsSongs, displaySearchSongs, displayFavoriteSongs, displayLyrics } from './sections/songs.js';
import { displaySection, activateLink } from './helpers.js';

function routing() {
    const hash = window.location.hash || '#home';
    const tabHash = hash.split('-');

    activateLink(tabHash[0]);

    switch (tabHash[0]) {
        case '#home':
            displaySection('home');
            break

        ////////////////////////////////////////////////////////////////////

        case '#artists':
            if (tabHash[1]) {
                displaySection('list');
                displayArtistsSongs(tabHash[1]);
            } else {
                displaySection('artists');
                displayArtists();
            }
            break

        ////////////////////////////////////////////////////////////////////

        case '#player':
            displaySection('player');
            break

        ////////////////////////////////////////////////////////////////////

        case '#search':
            displaySection('list');
            displaySearchSongs(tabHash[1]);
            break

        ////////////////////////////////////////////////////////////////////

        case '#favorites':
            displaySection('list');
            displayFavoriteSongs();
            break;

        ////////////////////////////////////////////////////////////////////

        case '#songs':
            displaySection('lyrics');
            displayLyrics(tabHash[1]);
            break;
    }
}

routing();
window.addEventListener('hashchange', routing);

// Fonctionnalité de recherche - Interactions

const searchButton = document.querySelector('#search-trigger');
const searchInput = document.querySelector('#search-input');

searchButton.addEventListener('click', () => {
    searchInput.classList.add('active');
})

searchInput.addEventListener('input', (input) => {
    window.location.hash = `#search-${encodeURIComponent(input.currentTarget.value)}`;
})

