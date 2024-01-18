class MovieDetailReview extends HTMLElement {
  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    const {
      author,
      avatarPath,
      rating,
      content,
      updatedAt,
    } = this._review;

    const paragraphs = content.split('\r\n').map((p) => `<p>${p}</p>`).join('');

    this.innerHTML = `
      <article>
        <header class="d-flex gap-3">
          <img src="${avatarPath}" class="avatar-img rounded-circle" alt="avatar">
          <div>
            <strong>${author}</strong>
            <p>
              <span class="badge bg-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                ${rating}
              </span>
              <span class="text-muted">on ${updatedAt}</span>
            </p>
          </div>
        </header>
        ${paragraphs}
      </article>
      <hr>
    `;
  }
}

customElements.define('movie-detail-review', MovieDetailReview);
