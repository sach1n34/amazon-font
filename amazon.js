document.addEventListener("DOMContentLoaded", function () {
    // SEARCH BAR INTERACTION
    const searchBtn = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-input');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function () {
            let query = searchInput.value.trim();
            if (query) {
                alert('Searching for "${query}" on Amazon...');
            } else {
                alert("Please enter something to search.");
            }
        });
    }

    // BACK TO TOP BUTTON
    const backToTop = document.querySelector('.foot-panel1');
    if (backToTop) {
        backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // CART COUNTER
    let cartCount = 0;
    const cartBtn = document.querySelector('.nav-cart');
    if (cartBtn) {
        cartBtn.addEventListener('click', function () {
            cartCount++;
            alert('You have ${cartCount} item(s) in your cart.');
        });
  }

    // NAVIGATION HOVER HIGHLIGHT
    document.querySelectorAll('.panel-opt p').forEach(function (item) {
        item.addEventListener('mouseenter', function () {
            item.style.color = "#febd68";
            item.style.cursor = "pointer";
        });
        item.addEventListener('mouseleave', function () {
            item.style.color = "white";
        });
    });

    // SHOP BOX CLICK ALERT
    document.querySelectorAll('.box-content p').forEach(function (shopNow) {
        shopNow.addEventListener('click', function () {
            const productTitle = shopNow.parentElement.querySelector('h2').innerText;
            alert('Redirecting to ${productTitle} page...');
        });
    });
});