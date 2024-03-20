document.addEventListener("DOMContentLoaded", () => {
    const checkOut = document.getElementById("checkOut");
    const cartContainer = document.querySelector(".cartContainer");
    const cartItemTemplate = document.querySelector(".cart-item-template");

    // Retrieve movie details from localStorage
    let movieDetails = JSON.parse(localStorage.getItem("movieDetails")) || [];
    let totalPrice = 0; // Initialize total price

    // Loop through movie details and add each movie to cart
    movieDetails.forEach((movie, index) => {
        addCartItem(movie, index === 0); // Pass true for the first movie
    });

    // Function to clone the cart item component and update its content
    function addCartItem(movie, isFirstMovie) {
        // Clone the cart item template
        const clonedCartItem = cartItemTemplate.cloneNode(true);
        // Remove template class to display cloned item
        clonedCartItem.classList.remove('cart-item-template');

        // Update data in the cloned cart item
        const titleElement = clonedCartItem.querySelector('.cart-item-title');
        titleElement.textContent = movie.name; // Use movie title from parameter

        const imagesMovie = clonedCartItem.querySelector('#imagesMovie');
        imagesMovie.src = movie.image;

        const minusButton = clonedCartItem.querySelector("#minus");
        const plusButton = clonedCartItem.querySelector("#plus");
        const noOfMoviesInput = clonedCartItem.querySelector("#noOfMovie");
        const priceElement = clonedCartItem.querySelector("#price");

        // Set initial price and calculate total price
        const moviePrice = 50; // Base price for each movie
        priceElement.textContent = `${moviePrice * parseInt(noOfMoviesInput.value)}`;
        totalPrice += parseFloat(priceElement.textContent);

        // Event listener for decreasing quantity
        minusButton.addEventListener('click', () => {
            if (noOfMoviesInput.value <= 1) {
                alert("Can't reduce the movie");
            } else {
                noOfMoviesInput.value--;
                totalPrice -= moviePrice; // Deduct the price of one movie
                priceElement.textContent = `${moviePrice * parseInt(noOfMoviesInput.value)}`;
                updateTotalPrice();
            }
        });

        // Event listener for increasing quantity
        plusButton.addEventListener('click', () => {
            noOfMoviesInput.value++;
            totalPrice += moviePrice; // Add the price of one movie
            priceElement.textContent = `${moviePrice * parseInt(noOfMoviesInput.value)}`;
            updateTotalPrice();
        });

        // Remove button event listener
        const removeButton = clonedCartItem.querySelector("#remove");
        removeButton.addEventListener('click', () => {
            // Remove the movie from movieDetails array
            movieDetails = movieDetails.filter(m => m.name !== movie.name);
            localStorage.setItem("movieDetails", JSON.stringify(movieDetails));
            // Remove the cart item from the UI
            cartContainer.removeChild(clonedCartItem);
            // Update total price
            totalPrice -= parseFloat(priceElement.textContent);
            updateTotalPrice();
        });

        // Add the cloned cart item to the cart container   
        cartContainer.appendChild(clonedCartItem);
    }

    // Function to update the total price displayed
    function updateTotalPrice() {
        const subtotalElement = document.getElementById("subtotal");
        subtotalElement.textContent = totalPrice.toFixed(2); // Display total price with two decimal places


        const discountElement = document.getElementById("discount");
        discountElement.textContent = (totalPrice*0.10);
        const discountPrice =  parseInt(discountElement.textContent)

        const totalElement = document.getElementById("total");
        totalElement.textContent = totalPrice - discountPrice

    }
});
