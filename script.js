const mobileNavToggle = document.getElementById("mobileNavToggle");
const mobileNav = document.getElementById("mobileNav");

mobileNavToggle.addEventListener("click", function () {
    if (mobileNav.style.display === "block") {
        mobileNav.style.display = "none"; // Hide the menu
    } else {
        mobileNav.style.display = "block"; // Show the menu
    }
});

// Define an array of card data objects
const cardData = [
  {
    id: 'product1',
    imageSrc: './mg/img1.jpeg',
    productName: 'Jacket',
    description: 'This is a jacket lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    price: '$19.99',
    rating: [true, true, true, false, false] // Represents star ratings
  },
  {
    id: 'product2',
    imageSrc: './mg/img2.jpeg',
    productName: 'Blazer',
    description: 'This is a Blazer lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    price: '$24.99',
    rating: [true, true, true, false, false] // Represents star ratings
  },
  {
    id: 'product3',
    imageSrc: './mg/img5.jpeg',
    productName: 'Shorts',
    description: 'This is a Shorts lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
     price: '$17.99', rating: [true, true, true, false, false] // Represents star ratings
  },
  {
    id: 'product4',

    imageSrc: './mg/img6.jpeg',
    productName: 'Accessories',
    price: '$57.99',
    description: 'This is a Accessories lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    rating: [true, true, true, false, false] // Represents star ratings
  },
  {
    id: 'product5',

    imageSrc: './mg/img7.jpeg',
    productName: 'Pants',
    price: '$48.99',
    description: 'This is a Pants lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    rating: [true, true, true, false, false] // Represents star ratings
  },
  {
    id: 'product6',

    imageSrc: './mg/shoes.jpeg',
    productName: 'Shoes',
    price: '$96.99',
    description: 'This is a Shoes lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    rating: [true, true, true, false, false] // Represents star ratings
  },
  // Add more card data objects here for other cards
];


// Add an event listener to trigger the search as you type
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', search);

// Modified search function
function search() {
  const searchInput = document.getElementById('searchInput').value.trim().toUpperCase();
  const productCards = document.querySelectorAll('.product');

  productCards.forEach((product) => {
    const productName = product.querySelector('.text-xl').textContent.trim().toUpperCase();
    const description = product.querySelector('.text-sm').textContent.trim().toUpperCase();

    // Combine product name and description into a single string
    const cardText = `${productName} ${description}`;

    if (cardText.includes(searchInput) || searchInput === '') {
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
      <p class="text-sm text-gray-600 mb-4">${card.description}</p> <!-- Description is displayed here -->
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
