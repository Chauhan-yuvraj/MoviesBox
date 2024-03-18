
document.addEventListener("DOMContentLoaded", () => {
    const checkOut = document.getElementById("checkOut");
    const cartContainer = document.querySelector(".cartContainer");

    // Function to clone the cart item component and update its content
    function addCartItem() {
        const cartItemTemplate = document.querySelector(".cart-item-template");


        // Clone the cart item component
        const clonedCartItem = cartItemTemplate.cloneNode(true);
        clonedCartItem.classList.remove('cart-item-template');
         // Remove template class to display cloned item

        // Update data in the cloned cart item
        const titleElement = clonedCartItem.querySelector('.cart-item-title');
        titleElement.textContent = "New Title"; // Change title content

        const yearElement = clonedCartItem.querySelector('.cart-item-year');
        yearElement.textContent = "2022"; // Change year content

        // Add the cloned cart item to the cart container
        cartContainer.appendChild(clonedCartItem);
    }

    // Add event listener to the checkout button
    checkOut.addEventListener('click',()=>{
        addCartItem();
    })
});
