document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('orderForm');
  const summaryDiv = document.getElementById('summary');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from reloading the page

    const name = document.getElementById('customerName').value.trim();

    const selectedItems = [...document.querySelectorAll('input[name="foodItem"]:checked')]
      .map(item => item.value);

    if (!name || selectedItems.length === 0) {
      alert("Please enter your name and select at least one food item.");
      return;
    }

    summaryDiv.innerHTML = `
      <h2>Order Summary</h2>
      <p><strong>Customer Name:</strong> ${name}</p>
      <p><strong>Items Ordered:</strong> ${selectedItems.join(', ')}</p>
    `;
  });
});
