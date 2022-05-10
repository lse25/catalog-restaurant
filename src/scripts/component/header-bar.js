class HeaderBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
    <div class="header">
    <div class="header-logo">
        <img src="../images/logo.png" alt="logo-VGfood">
        <a href="#/home">VGfood</a>
    </div>
    <button id="hamburger-button" class="hamburger-button" tabindex="0" aria-label="button to open side menu">☰</button>
    <nav id="drawer" class="nav-header">
        <ul class="nav-list">
            <li class="nav-item"><a href="#/home">Home</a></li>
            <li class="nav-item"><a href="#/favorite">Favorites</a></li>
            <li class="nav-item about-us"><a 
                target="_blank" 
                href="https://www.linkedin.com/in/kennie-kennie-5a198b1b5"
                rel="noopener noreferrer">
                About Us</a>
            </li>
        </ul>
    </nav>  
</div>
    <section class="hero" id="hero">
        <div class="hero-content">
            <h1 class="hero-title">Vegetarian Food</h1>
            <p class="hero-subtitle">A healthy outside starts from the inside</p>
        </div>
    </section>
    </header>
      `;
  }
}

customElements.define('header-bar', HeaderBar);
