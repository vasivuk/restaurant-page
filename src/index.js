import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const content = document.querySelector('.content');

const buttonsController = (() => {
    const menuButton = document.querySelector('#home-btn>button')

    return {menuButton};
})

function initializeNavbar(){
    const header = document.createElement('div');
    header.classList.add('header');
    const home = document.createElement('div');
    home.id = 'home-btn';
    home.innerHTML = '<button>Home</button>';

    const menu = document.createElement('div');
    menu.innerHTML = '<button>Menu</button>';

    const contact = document.createElement('div');
    contact.innerHTML = '<button>Contact</button>';

    const main = document.createElement('div');
    main.classList.add('main');

    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.textContent = "Photo by Dominika Roseclay from Pexels";

    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(contact);
    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
    loadHome(main);
}
initializeNavbar();