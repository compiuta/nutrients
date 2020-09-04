(function(window) {
    'use strict';

    function getData(fetchUrl, callBack) {
        fetch(fetchUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            callBack(data);
        });
    }

    function getSearchData(foodItem) {
        const fetchUrl = `https://nutrients1.herokuapp.com/${foodItem}`;

        getData(fetchUrl, app.nutrientsController.searchDataReturned);
    }

    function getFoodData(foodId) {
        const fetchUrl = `https://nutrients1.herokuapp.com/nutrients/${foodId}`;

        getData(fetchUrl, app.nutrientsController.foodDataReturned);
    }

    const nutrientsModel = {
        getSearchData: function(foodItem) {
            getSearchData(foodItem)
        },
        getFoodData: function(foodId) {
            getFoodData(foodId);
        }
    };

    console.log('model init');

    window.app = window.app || {};
    window.app.nutrientsModel = nutrientsModel;
})(window);