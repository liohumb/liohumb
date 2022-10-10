/* DIAGONAL SCROLL */
const container = document.querySelector('.work__container');

window.addEventListener('scroll', () => {
    container.style.transform = `
        translate(${-Math.floor(window.scrollY) * .377 + 125}px,
        ${-Math.floor(window.scrollY)}px)
    `;
});