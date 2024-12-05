var ProductArr = [];
var ProductCounter = 0;

function ProductCart() {
    const productName = document.getElementById('productName').value.trim();
    const productDetail = document.getElementById('productDetail').value.trim();
    const productPrice = document.getElementById('productPrice').value.trim();
    const productImage = document.getElementById('productImage').value.trim();

    if (!productName || !productDetail || !productPrice || !productImage) {
        alert('Please fill in all fields');
        return;
    }

    var productBlocks = document.getElementById('Product-Contaner');
    var productInfo = {
        ProductName: productName,
        ProductDetail: productDetail,
        ProductPrice: productPrice,
        ProductImage: productImage
    };

    ProductArr.push(productInfo);

    productBlocks.innerHTML += `
    <div class="product-card">
        <img src="${productInfo.ProductImage}" alt="${productInfo.ProductName}">
        <div class="product-details">
            <h4>${productInfo.ProductName}</h4>
            <p>${productInfo.ProductDetail}</p>
            <strong>$${productInfo.ProductPrice}</strong>
        </div>
        <a href="#" class="add-to-cart" onclick="ATC(${ProductCounter})">Add to Cart</a>
    </div>`;

    
    document.getElementById('productName').value = '';
    document.getElementById('productDetail').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productImage').value = '';

    ProductCounter++;
    console.log(ProductArr);
}

function ATC(index) {
    var cartSpace = document.getElementById('cart-space');
    cartSpace.classList.add('open');
    var cartContent = document.getElementById('cart-content');
    var product = ProductArr[index];
    cartContent.innerHTML += `
    <div class="cart-item">
        <img src="${product.ProductImage}" alt="${product.ProductName}">
        <div>
            <h4>${product.ProductName}</h4>
            <p>$${product.ProductPrice}</p>
        </div>
    </div>`;
}