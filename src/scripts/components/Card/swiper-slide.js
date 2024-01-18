class SwiperSlide extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.classList.add('swiper-slide');
  }
}

customElements.define('swiper-slide', SwiperSlide);
