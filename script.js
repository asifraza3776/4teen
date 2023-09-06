// const mobileNavIcon = document.querySelector('.mobile-nav-icon');
// const mobileNav = document.querySelector('.mobile-nav');

// // Add a click event listener to the mobile navigation icon
// mobileNavIcon.addEventListener('click', () => {
//     // Toggle the "hidden" class to show/hide the mobile navigation menu
//     mobileNav.classList.toggle('hidden');
// });



// function search() {
//     const searchInput = document.getElementById('searchInput').value.toUpperCase();
//     const productCards = document.querySelectorAll('.product');
  
//     productCards.forEach((product) => {
//       const category = product.getAttribute('data-category').toUpperCase();
//       if (category === searchInput) {
//         product.style.display = 'block';
//       } else {
//         product.style.display = 'none';
//       }
//     });
//   }
  




// Rest of your script.js code...


// Define an array of card data objects
const cardData = [
  {
    id: 'product1',
    imageSrc: './mg/img1.jpeg',
    productName: 'Jacket',
    price: '$19.99',
    rating: [true, true, true, false, false] // Represents star ratings
  },
  {
    id: 'product2',
    imageSrc: './mg/img2.jpeg',
    productName: 'Blazer',
    price: '$24.99',
    rating: [true, true, true, false, false] // Represents star ratings
  },
  {
    id: 'product3',
    imageSrc: './mg/img5.jpeg',
    productName: 'Shorts', price: '$17.99', rating: [true, true, true, false, false] // Represents star ratings
  },
  {
    id: 'product4',

    imageSrc: './mg/img6.jpeg',
    productName: 'Accessories',
    price: '$57.99',
    rating: [true, true, true, false, false] // Represents star ratings
  },
  {
    id: 'product5',

    imageSrc: './mg/img7.jpeg',
    productName: 'Pants',
    price: '$48.99',
    rating: [true, true, true, false, false] // Represents star ratings
  },
  {
    id: 'product6',

    imageSrc: './mg/shoes.jpeg',
    productName: 'Shoes',
    price: '$96.99',
    rating: [true, true, true, false, false] // Represents star ratings
  },
  // Add more card data objects here for other cards
];


function search() {
  const searchInput = document.getElementById('searchInput').value.trim().toUpperCase();
  const productCards = document.querySelectorAll('.product');

  productCards.forEach((product) => {
    const category = product.getAttribute('data-category').toUpperCase();
    const productName = product.querySelector('.text-xl').textContent.toUpperCase();

    // Split the search input into words
    const searchWords = searchInput.split(' ');

    // Check if any of the search words match the first word of the category or product name
    const firstCategoryWord = category.split(' ')[0];
    const firstProductNameWord = productName.split(' ')[0];

    const matchCategory = searchWords.some((word) => firstCategoryWord.startsWith(word));
    const matchProductName = searchWords.some((word) => firstProductNameWord.startsWith(word));

    if (searchInput === '' || matchCategory || matchProductName) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}


// Function to generate the HTML structure for a card
function generateCardHTML(card) {
  return `
    <div class="bg-white rounded-lg shadow-md p-4 product" id="${card.id}" data-category="${card.category}">
      <img src="${card.imageSrc}" alt="${card.productName}" class="w-full h-48 object-cover mb-4" />
      <p class="text-xl font-semibold mb-2">${card.productName}</p>
      <p class="text-lg text-gray-700 mb-2">${card.price}</p>
      <div class="flex items-center justify-center">
        ${card.rating.map(rating => `<span class="${rating ? 'text-yellow-400' : 'text-gray-400'}">&#9733;</span>`).join('')}
      </div>
    </div>
  `;
}

// Get the product-list container
const productList = document.getElementById('product-list');

// Loop through the card data array and generate cards dynamically
cardData.forEach(card => {
  const cardHTML = generateCardHTML(card);
  productList.innerHTML += cardHTML;
});
