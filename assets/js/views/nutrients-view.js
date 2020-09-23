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

    function createSearchResultsItem(itemData) {
        const searchItem = document.createElement('a');

        searchItem.classList.add('search-item');
        searchItem.innerText = itemData.description;
        searchItem.href = `${window.location.origin}/food/?q=${itemData.fdc_id}`;

        return searchItem;
    }

    function populateSearchData(data) {
        const searchResultsContainer = document.querySelector('[data-populateResults]');

        searchResultsContainer.innerHTML = '';

        const searchResultsFragment = document.createDocumentFragment();

        data.forEach(element => {
            const searchItem = createSearchResultsItem(element);

            searchResultsFragment.appendChild(searchItem);
        });

        searchResultsContainer.appendChild(searchResultsFragment);

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