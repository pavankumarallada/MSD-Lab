document.addEventListener('DOMContentLoaded', function () {
    var colorOptions = document.querySelectorAll('.color-option');
    var colorPrices = document.querySelectorAll('.color-price');
    var selectedColor = null;
    var currentPrice = null;
    // Set initial selected color and price (default to the first option)
    var firstColorOption = colorOptions[0];
    if (firstColorOption) {
        firstColorOption.classList.add('selected');
        selectedColor = firstColorOption.dataset.color || null;
        currentPrice = parseFloat(firstColorOption.dataset.price || '0');
        updateDisplayedPrice(selectedColor);
    }
    colorOptions.forEach(function (option) {
        var htmlOption = option;
        htmlOption.addEventListener('click', function () {
            // Remove selection from previously selected option
            colorOptions.forEach(function (opt) { return opt.classList.remove('selected'); });
            // Add selection to the clicked option
            htmlOption.classList.add('selected');
            selectedColor = htmlOption.dataset.color || null;
            currentPrice = parseFloat(htmlOption.dataset.price || '0');
            updateDisplayedPrice(selectedColor);
        });
    });
    function updateDisplayedPrice(selectedColor) {
        colorPrices.forEach(function (priceElement) {
            var htmlPriceElement = priceElement; // Type cast here
            var colorName = htmlPriceElement.dataset.colorDisplay;
            if (colorName === selectedColor) {
                htmlPriceElement.classList.add('selected-price');
            }
            else {
                htmlPriceElement.classList.remove('selected-price');
            }
        });
    }
    var backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', function () {
            // In a real application, you would navigate back to the previous page.
            alert('Going back to the previous page (not implemented in this example).');
        });
    }
    var addToCartButton = document.querySelector('.add-to-cart');
    if (addToCartButton) {
        addToCartButton.addEventListener('click', function () {
            if (selectedColor && currentPrice) {
                alert("Added Samsung Galaxy Note 7 (".concat(selectedColor, ") to cart for $").concat(currentPrice.toFixed(2), "!"));
                // In a real application, you would add the item to the shopping cart.
            }
            else {
                alert('Please select a color.');
            }
        });
    }
});
