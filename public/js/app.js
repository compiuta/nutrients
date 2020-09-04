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