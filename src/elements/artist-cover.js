class ArtistCover extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        const artistContent = document.querySelector(`#artist-list-item-template`);

        const artistElement = artistContent.content.cloneNode(true);

        artistElement.querySelector('a').href = this.getAttribute('href');
        artistElement.querySelector('img').src = this.getAttribute('cover');
        artistElement.querySelector('div').innerText = this.getAttribute('name');

        this.replaceChildren(artistElement);
    }
}

customElements.define('artist-cover', ArtistCover);