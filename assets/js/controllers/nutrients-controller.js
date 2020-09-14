(function(window) {
    'use strict';

    function fetchSearchData(foodItem) {
        app.nutrientsView.toggleLoadingOverlay();
        app.nutrientsModel.getSearchData(foodItem);

        console.log('fetching data');
    }

    function fetchFoodData(foodId) {
        app.nutrientsView.toggleLoadingOverlay();
        app.nutrientsModel.getFoodData(foodId);
    }

    function searchDataReturned(data) {
        app.nutrientsView.populateSearchData(data);
    }

    function foodDataReturned(data) {
        const foodDataString = JSON.stringify(data);
        app.nutrientsView.populateFoodData(foodDataString);
    }

    function extractUrlParameter(currentLocation) {
        const urlParameter = currentLocation.substr(currentLocation.indexOf("=") + 1);
        const parameter = urlParameter.replace(/'+'/g, ' ');

        return parameter;
    }

    function checkPage() {
        const currentLocation = window.location.href;
        const urlParameter = extractUrlParameter(currentLocation);

        console.log(urlParameter)
        if (currentLocation.includes('/search')) {
            fetchSearchData(urlParameter);
        } else if (currentLocation.includes('/food')) {
            fetchFoodData(urlParameter);
        }
    }

    console.log('controller init');

    const nutrientsController = {
        fetchFoodData: function(foodId) {
            fetchFoodData(foodId);
        },
        searchDataReturned: function(data) {
            searchDataReturned(data);
        },
        foodDataReturned: function(data) {
            foodDataReturned(data);
        },
        checkPage: function() {
            checkPage();
        }
    }

    window.app = window.app || {};
    window.app.nutrientsController = nutrientsController;
})(window);