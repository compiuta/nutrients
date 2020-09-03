(function(window) {
    'use strict';

    function getData(fetchUrl) {
        fetch(fetchUrl)
        .then(response => response.json())
        .then(data => console.log(data));
    }

    function getSearchData(foodItem) {
        const fetchUrl = `https://nutrients1.herokuapp.com/${foodItem}`;

        getData(fetchUrl);
    }

    function getFoodData(foodId) {
        const fetchUrl = `https://nutrients1.herokuapp.com/nutrients/${foodId}`;

        getData(fetchUrl);
    }

    const nutrientsModel = {
        getSearchData: function(foodItem) {
            getSearchData(foodItem)
        },
        getFoodData: function(foodId) {
            getSearchData(foodId);
        }
    };

    console.log('model init');

    window.app = window.app || {};
    window.app.nutrientsModel = nutrientsModel;
})(window);