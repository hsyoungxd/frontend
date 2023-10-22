const quantityInputs = document.querySelectorAll('.quantity');
const subtotalElement = document.getElementById('subtotal');
const totalElement = document.getElementById('total');
const shippingCost = 10; // Set your shipping cost here

function updateSubtotal() {
    let subtotal = 0;

    quantityInputs.forEach((input) => {
        const box = input.closest('.box');
        const price = parseFloat(box.getAttribute('data-price'));
        const quantity = parseInt(input.value);
        subtotal += price * quantity;
    });

    const total = subtotal + shippingCost;
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    totalElement.textContent = `$${total.toFixed(2)}`;
}

quantityInputs.forEach((input) => {
    input.addEventListener('input', updateSubtotal);
});

updateSubtotal();