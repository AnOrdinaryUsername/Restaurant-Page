// Render visual content of homepage
const renderHome = () => {
    const mainContent = document.querySelector('main');
    const emptyDiv = document.createElement('div');
    mainContent.appendChild(emptyDiv);

    const homeInfo = `   
  <div class="home-container">
    <div class="image-wrapper">
      <img
        class="burger"
        src="images/taylor-harding-larger-burger-unsplash.jpg"
        alt="A close up picture of burger and fries."
      />
    </div>
    <section class="motto-container">
      <h1 class="motto">A Return to Retro</h1>
      <div class="diner-info">
        <div class="inside-wrapper">
          <img
            class="inside-diner"
            src="images/spencer-davis-diner-unsplash.jpg"
            alt="The inside of Scott's famous diner."
          />
        </div>
        <div class="mission-container">
          <h2 class="subheader">Our Mission</h2>
          <p class="subtext">
            Scott's Diner has been a local favorite 70 years running. We aim
            to deliver the quintessential dining experience of the 1950s,
            right here in the good ol' West. Featuring favorites like the
            classic cheeseburger and the malted milkshake.
          </p>
        </div>
      </div>
    </section>
    <div class="gallery">
      <h2>Gallery</h2>
      <div class="gallery-images">
        <img
          src="images/coffee.jpg"
          alt="Cup of coffee, water, and a salt shaker on a table."
        />
        <img
          src="images/spencer-davis-milkshake-unsplash.jpg"
          alt="A girl holding two milkshakes in each hand."
        />
        <img
          src="images/eiliv-sonas-pancake-unsplash.jpg"
          alt="Pancake with
    chocolate sauce poured over it."
        />
      </div>
    </div>
  </div>`;

    emptyDiv.insertAdjacentHTML('beforeend', homeInfo);
};

export default renderHome;
