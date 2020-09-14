(function(window) {
    'use strict';

    const searchFoodForm = document.querySelector('[data-searchFoodForm]');
    const searchFoodInput = document.querySelector('[data-searchFoodInput]');
    const loadingOverlay = document.querySelector('[data-loadingOverlay]');

    function toggleLoadingOverlay() {
        loadingOverlay.classList.toggle('hide');
    }

    function searchFood(e) {
        e.preventDefault();

        const  searchInputValue = searchFoodInput.value;

        searchFoodInput.value = '';

        console.log(searchInputValue);

        window.location.href = `${window.location.href}/search/?q=${searchInputValue}`;

    }

    function populateSearchData(data) {
        const searchResultsContainer = document.querySelector('[data-populateResults]');

        searchResultsContainer.innerHTML = '';

        const tempfrag = document.createDocumentFragment();

        data.forEach(element => {
            const tempel = document.createElement('a');

            tempel.innerText = element.description;
            tempel.href = `${window.location.origin}/food/?q=${element.fdc_id}`;

            tempfrag.appendChild(tempel);
        });

        searchResultsContainer.appendChild(tempfrag);

        toggleLoadingOverlay();
    }

    function populateFoodData(data) {
        const searchResultsContainer = document.querySelector('[data-populateResults]');
        
        searchResultsContainer.innerHTML = '';

        searchResultsContainer.innerText = data;

        toggleLoadingOverlay();
    }

    searchFoodForm.addEventListener('submit', searchFood);
    window.addEventListener('load', app.nutrientsController.checkPage);

    const nutrientsView = {
        toggleLoadingOverlay: function() {
            toggleLoadingOverlay();
        },
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