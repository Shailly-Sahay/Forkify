import View from './view';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    if (numPages <= 1) return ''; // No pagination needed if there's only one page

    // Page 1, and there are other pages
    if (curPage === 1) {
      return this._generateNextButton(curPage + 1);
    }

    // Last page
    if (curPage === numPages) {
      return this._generatePrevButton(curPage - 1);
    }

    // Other pages
    return (
      this._generatePrevButton(curPage - 1) +
      this._generateNextButton(curPage + 1)
    );
  }

  _generatePrevButton(page) {
    return `
      <button data-goto="${page}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${page}</span>
      </button>`;
  }

  _generateNextButton(page) {
    return `
      <button data-goto="${page}" class="btn--inline pagination__btn--next">
        <span>Page ${page}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>`;
  }
}

export default new PaginationView();
