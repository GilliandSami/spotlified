import { loadArtists } from "../api";

const artistList = document.querySelector('.artist-list');

function displayArtists() {
    loadArtists().then((artists) => {
        artistList.innerHTML = '';

        artists.forEach((artist) => {
            const artistElement = document.createElement('artist-cover');

            artistElement.setAttribute('href', `#artists-${artist.id}`);
            artistElement.setAttribute('name', artist.name);
            artistElement.setAttribute('cover', artist.image_url);

            artistList.insertAdjacentElement("afterbegin", artistElement);
        })
    })
}

export { displayArtists }