const playClick = new CustomEvent('play_click');
const favoriteClick = new CustomEvent('favorite_click');

class SongItem extends HTMLElement {

    // observedAttributes est un getter statique qui retourne un tableau des noms d'attributs à observer.
    // Lorsque l'un de ces attributs change de valeur, attributeChangedCallback est appelé.
    static observedAttributes = ['favorite', 'playpause'];

    // connectedCallback est une méthode du cycle de vie qui est appelée lorsque l'élément est inséré dans le DOM.
    // C'est l'endroit idéal pour configurer l'initialisation, attacher des événements, ou effectuer le rendu.
    connectedCallback() {
        this.render();
    }

    // attributeChangedCallback est appelé automatiquement lorsque les attributs listés dans observedAttributes changent.
    // Ici, il appelle simplement render pour mettre à jour l'élément avec le nouvel état des attributs.
    attributeChangedCallback() {
        this.render();
    }

    render() {
        const favoriteIcon = this.getAttribute('favorite') == 'true' ? 'favorite' : 'favorite_border';
        const playIcon = this.getAttribute('playpause') == 'true' ? 'pause' : 'play_arrow';

        this.innerHTML =
            `<a href="${this.getAttribute('href')}">
            <div class="list-item-title">${this.getAttribute('title')}</div>
            <div class="list-item-actions">
                <button type="button" class="icon-button favorite-button ">
                    <span class="material-icons">${favoriteIcon}</span>
                </button>
                <button type="button" class="icon-button play-button">
                    <span class="material-icons">${playIcon}</span>
                </button>
            </div>
        </a>`

        // Attache des gestionnaires d'événements aux boutons pour dispatcher des événements personnalisés lorsque ceux-ci sont cliqués.
        this.querySelector('.play-button').addEventListener('click', (e) => {
            e.preventDefault();
            this.dispatchEvent(playClick);
        })

        this.querySelector('.favorite-button').addEventListener('click', (e) => {
            e.preventDefault();
            this.dispatchEvent(favoriteClick);
        })
    }
}

customElements.define('song-item', SongItem);