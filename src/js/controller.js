import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';

// import 'core-js';
import 'regenerator-runtime/runtime';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchresults = async function () {
  try {
    // 1) Get search query
    const query = searchView.getQuery();

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render results
  } catch (err) {}
};

// controlSearchresults();

const init = function () {
  recipeView.addHandleRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchresults);
};

init();
