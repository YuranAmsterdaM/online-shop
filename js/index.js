const cart = new Cart($('#cartModal'));
const productList = new ProductList(
  'products.json',
  $('.products-container'),
  cart
);

document.querySelector('.apply-filter').addEventListener('click', ()=> productList.renderProducts($('.products-container'), productList.products) );