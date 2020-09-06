(function(window) {
    'use strict';

    function fetchSearchData(foodItem) {
        app.nutrientsModel.getSearchData(foodItem);

        console.log('fetching data');
    }

    function fetchFoodData(foodId) {
        app.nutrientsModel.getFoodData(foodId);
    }

    function searchDataReturned(data) {
        app.nutrientsView.populateSearchData(data);
    }

    function foodDataReturned(data) {
        const foodDataString = JSON.stringify(data);
        app.nutrientsView.populateFoodData(foodDataString);
    }

    console.log('controller init');

    const nutrientsController = {
        fetchSearchData: function(foodItem) {
            fetchSearchData(foodItem);
        },
        fetchFoodData: function(foodId) {
            fetchFoodData(foodId);
        },
        searchDataReturned: function(data) {
            searchDataReturned(data);
        },
        foodDataReturned: function(data) {
            foodDataReturned(data);
        }
    }

    window.app = window.app || {};
    window.app.nutrientsController = nutrientsController;
})(window);