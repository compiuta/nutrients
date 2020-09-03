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