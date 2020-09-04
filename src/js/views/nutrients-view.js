(function(window) {
    'use strict';

    const searchFoodForm = document.querySelector('[data-searchFoodForm]');
    const searchFoodInput = document.querySelector('[data-searchFoodInput]');
    const searchResultsContainer = document.querySelector('[data-searchResults]');

    function searchFood(e) {
        e.preventDefault();

        const  searchInputValue = searchFoodInput.value;

        searchFoodInput.value = '';

        console.log(searchInputValue);

        app.nutrientsController.fetchSearchData(searchInputValue);

    }

    function getFoodData(e) {
        const clickedEl = e.currentTarget;
        const foodId = clickedEl.dataset.foodId;

        console.log(foodId)
        app.nutrientsController.fetchFoodData(foodId);
    }

    function populateSearchData(data) {
        searchResultsContainer.innerHTML = '';

        const tempfrag = document.createDocumentFragment();

        data.forEach(element => {
            const tempel = document.createElement('h4');

            tempel.innerText = element.description;
            tempel.setAttribute('data-food-id', element.fdc_id);

            tempel.addEventListener('click', getFoodData);

            tempfrag.appendChild(tempel);
        });

        searchResultsContainer.appendChild(tempfrag);
    }

    function populateFoodData(data) {
        searchResultsContainer.innerHTML = '';

        searchResultsContainer.innerText = data;
    }

    searchFoodForm.addEventListener('submit', searchFood);

    const nutrientsView = {
        populateSearchData: function(data) {
            populateSearchData(data);
        },
        populateFoodData: function(data) {
            populateFoodData(data);
        }
    }

    console.log('view init');

    window.app = window.app || {};
    window.app.nutrientsView = nutrientsView;
})(window);