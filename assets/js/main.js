//  order now button




//  order now form
    
       document.addEventListener('DOMContentLoaded', function() {
    const orderNowButton = document.getElementById("order-now");
    orderNowButton.addEventListener("click", function() {
        const orderForm = document.createElement("form");
        orderForm.setAttribute("id", "order-form");
        orderForm.setAttribute("action", "/submit-order");
        orderForm.setAttribute("method", "POST");
        orderForm.innerHTML = `
            <h2>Order Form</h2>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="product">Product:</label>
            <select id="product" name="product">
                <option value="product1">Lungo</option>
                <option value="product2">Esspreso</option>
                <option value="product3">Ristretto</option>
                 <option value="product1">Cappuccino</option>
                <option value="product2">Latte Macchiato</option>
                <option value="product3">Macchiato</option>
            </select>
            <button type="submit">Submit Order</button>
        `;
        document.body.appendChild(orderForm);
    });
});
