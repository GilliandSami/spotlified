const MYURL = 'https://webmob-ui-22-spotlified.herokuapp.com';

function loadJSON(url) {
    return fetch(url).then((answer) => {
        return answer.json();
    });
}

function loadArtists() {
    const url = `${MYURL}/api/artists`;
    return loadJSON(url);
}

function loadSongs(id) {
    const url = `${MYURL}/api/artists/${id}/songs`;
    return loadJSON(url);
}

function loadSearch(query) {
    const url = `${MYURL}/api/songs/search/${query}`;
    return loadJSON(url);
}

function loadLyrics(id) {
    const url = `${MYURL}/api/songs/${id}`;
    return loadJSON(url);
}

export { loadArtists, loadSongs, loadSearch, loadLyrics }