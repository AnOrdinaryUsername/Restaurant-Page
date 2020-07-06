const renderContact = () => {
    const mainContent = document.querySelector('main');
    const emptyDiv = document.createElement('div');
    emptyDiv.classList.add('placeholder-container');

    mainContent.appendChild(emptyDiv);

    const contactInfo = `
  <div class="contact-container center">
    <h1>Contact</h1>
    <ul>
      <li>(123)456-7890</li>
      <li>fakeemail@gmail.com</li>
    </ul>
  </div>
    `;

    emptyDiv.insertAdjacentHTML('beforeend', contactInfo);
};

export default renderContact;
