class SwiperSlide extends HTMLElement {
  constructor() {
    super();
    this.childrenHTML = this.innerHTML;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.classList.add('swiper-slide');
    this.innerHTML = this.childrenHTML;
  }
}

customElements.define('swiper-slide', SwiperSlide);
