
function loadHome(main){
    const heroSection = document.createElement('div');
    heroSection.classList.add('hero-section');
    const title = document.createElement('h1');
    title.textContent = "Donut place";

    heroSection.appendChild(title);
    main.appendChild(heroSection);
}

export default loadHome;