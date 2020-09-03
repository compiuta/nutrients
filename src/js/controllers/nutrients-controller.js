(function(window) {
    'use strict';

    function fetchSearchData(foodItem) {
        app.nutrientsModel.getSearchData(foodItem);

        console.log('fetching data');
    }

    function fetchFoodData(foodId) {
        app.nutrientsModel.getFoodData(foodId);
    }

    console.log('controller init');

    const nutrientsController = {
        fetchSearchData: function(foodItem) {
            fetchSearchData(foodItem);
        },
        fetchFoodData: function(foodId) {
            fetchFoodData(foodId);
        }
    }

    window.app = window.app || {};
    window.app.nutrientsController = nutrientsController;
})(window);