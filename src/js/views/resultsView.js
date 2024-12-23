import View from './view';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = `No recipes found for your query! Please try again.`;
  _message = '';

  _generateMarkup() {
    return this._data.map(el => this._generateMarkupPreview(el)).join('');
  }

  _generateMarkupPreview(el) {
    const id = window.location.hash.slice(1);

    return `<li class="preview">
                    <a class="preview__link ${
                      el.id === id ? 'preview__link--active' : ''
                    }" href="#${el.id}">
                      <figure class="preview__fig">
                        <img src="${el.image}" alt="Test" />
                      </figure>
                      <div class="preview__data">
                        <h4 class="preview__title">
                          ${el.title}
                        </h4>
                        <p class="preview__publisher">${el.publisher}</p>
                         <div class="preview__user-generated">
                     
                         </div>
                      </div>
                    </a>
                  </li>`;
  }
}

export default new ResultsView();
