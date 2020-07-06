const renderMenu = () => {
    const mainContent = document.querySelector('main');
    const emptyDiv = document.createElement('div');
    emptyDiv.classList.add('placeholder-container');

    mainContent.appendChild(emptyDiv);

    const menuInfo = `
  <div class="menu-container center">
    <h1>Menu</h1>
    <ul>
      <li>Burger</li>
      <li>Fries</li>
    </ul>
  </div>
    `;

    emptyDiv.insertAdjacentHTML('afterbegin', menuInfo);
};

export default renderMenu;
