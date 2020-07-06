const renderLocations = () => {
    const mainContent = document.querySelector('main');
    const emptyDiv = document.createElement('div');
    emptyDiv.classList.add('placeholder-container');

    mainContent.appendChild(emptyDiv);

    const locations = `
  <div class="locations-container center">
    <h1>Locations</h1>
    <ul>
      <li>1234 Fake St.</li>
      <li>Some Place, CA 12345</li>
    </ul>
  </div>
    `;

    emptyDiv.insertAdjacentHTML('beforeend', locations);
};

export default renderLocations;
