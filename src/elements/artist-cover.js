class ArtistCover extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML =
            `<a href=${this.getAttribute('href')}>
            <img src=${this.getAttribute('cover')} />
            <div class="artist-list-item-title"> ${this.getAttribute('name')}</div>
        </a>`
    }
}

customElements.define('artist-cover', ArtistCover);