function displaySection(id) {
    const sectionActive = document.querySelector('section.active');
    sectionActive.classList.remove('active');

    const newSectionActive = document.querySelector(`#${id}-section`);
    newSectionActive.classList.add('active');
}

function activateLink(id) {
    const navActif = document.querySelector(`nav a.active`);
    navActif?.classList.remove('active');

    const newNavActif = document.querySelector(`nav a[href="${id}"]`);
    newNavActif?.classList.add('active');
}

export { displaySection, activateLink }