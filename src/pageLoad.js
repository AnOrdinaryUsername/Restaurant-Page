import renderHome from './renderHome';
import renderMenu from './renderMenu';
import renderLocations from './renderLocations';
import renderContact from './renderContact';

const pageLoad = () => {
    // Load the homepage first

    const navSelection = document.querySelector('nav');

    navSelection.addEventListener('click', (e) => {
        const userChoice = e.target.id;
        const currentTab = document.querySelector('main');
        const currentTabInfo = currentTab.firstElementChild.className;

        if (((userChoice === 'home-tab' && currentTabInfo === 'home-container')
            || (userChoice === 'menu-tab' && currentTabInfo === 'menu-container')
            || (userChoice === 'locations-tab' && currentTabInfo === 'locations-container')
            || (userChoice === 'contact-tab' && currentTabInfo === 'contact-container'))
            || e.target.tagName !== 'A') {
            return;
        }

        while (currentTab.firstChild) {
            currentTab.removeChild(currentTab.firstChild);
        }

        switch (userChoice) {
        case 'home-tab':
            renderHome();
            break;
        case 'menu-tab':
            renderMenu();
            break;
        case 'locations-tab':
            renderLocations();
            break;
        case 'contact-tab':
            renderContact();
            break;
        default:
            break;
        }
    });
};

export default pageLoad;
