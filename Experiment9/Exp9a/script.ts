document.addEventListener('DOMContentLoaded', () => {
  const colorOptions = document.querySelectorAll('.color-option');
  const colorPrices = document.querySelectorAll('.color-price');

  let selectedColor: string | null = null;
  let currentPrice: number | null = null;

  // Set initial selected color and price (default to the first option)
  const firstColorOption = colorOptions[0] as HTMLElement;
  if (firstColorOption) {
      firstColorOption.classList.add('selected');
      selectedColor = firstColorOption.dataset.color || null;
      currentPrice = parseFloat(firstColorOption.dataset.price || '0');
      updateDisplayedPrice(selectedColor);
  }

  colorOptions.forEach(option => {
      const htmlOption = option as HTMLElement;
      htmlOption.addEventListener('click', () => {
          // Remove selection from previously selected option
          colorOptions.forEach(opt => (opt as HTMLElement).classList.remove('selected'));

          // Add selection to the clicked option
          htmlOption.classList.add('selected');
          selectedColor = htmlOption.dataset.color || null;
          currentPrice = parseFloat(htmlOption.dataset.price || '0');
          updateDisplayedPrice(selectedColor);
      });
  });

  function updateDisplayedPrice(selectedColor: string | null) {
      colorPrices.forEach(priceElement => {
          const htmlPriceElement = priceElement as HTMLElement; // Type cast here
          const colorName = htmlPriceElement.dataset.colorDisplay;
          if (colorName === selectedColor) {
              htmlPriceElement.classList.add('selected-price');
          } else {
              htmlPriceElement.classList.remove('selected-price');
          }
      });
  }

  const backButton = document.querySelector('.back-button');
  if (backButton) {
      backButton.addEventListener('click', () => {
          // In a real application, you would navigate back to the previous page.
          alert('Going back to the previous page (not implemented in this example).');
      });
  }

  const addToCartButton = document.querySelector('.add-to-cart');
  if (addToCartButton) {
      addToCartButton.addEventListener('click', () => {
          if (selectedColor && currentPrice) {
              alert(`Added Samsung Galaxy Note 7 (${selectedColor}) to cart for $${currentPrice.toFixed(2)}!`);
              // In a real application, you would add the item to the shopping cart.
          } else {
              alert('Please select a color.');
          }
      });
  }
});