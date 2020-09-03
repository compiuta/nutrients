(function(window) {
    'use strict';

    const searchFoodForm = document.querySelector('[data-searchFoodForm]');
    const searchFoodInput = document.querySelector('[data-searchFoodInput]');

    function searchFood(e) {
        e.preventDefault();

        const  searchInputValue = searchFoodInput.value;

        searchFoodInput.value = '';

        console.log(searchInputValue);

        app.nutrientsController.fetchSearchData(searchInputValue);

    }

    searchFoodForm.addEventListener('submit', searchFood);

    console.log('view init');
})(window);