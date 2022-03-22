// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector('.price span').textContent);
  const quantity = +product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.textContent = subtotal.toFixed(2);
  return subtotal;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  let allTheProducts = document.getElementsByClassName('product');
  // allTheProducts = [...allTheProducts];
  // console.log('allTheProducts', allTheProducts);
  let total = 0;
  for (let i = 0; i < allTheProducts.length; i++) {
    total += updateSubtotal(allTheProducts[i]);
  }
  // allTheProducts.forEach((oneProduct) => {
  //   total += updateSubtotal(oneProduct);
  // });
  const totalElement = document.querySelector('#total-value span');
  totalElement.textContent = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.target;
  // console.log('The target in remove is:', target);
  target.closest('tr').remove();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const tbody = document.querySelector('tbody');
  const template = document.getElementById('template');
  const clone = document.importNode(template.content, true);
  const name = document.querySelector('.create-product > td input');
  const price = document.querySelector(
    '.create-product td:nth-of-type(2) input'
  );
  clone.querySelector('.name span').textContent = name.value;
  clone.querySelector('.price span').textContent = price.value;
  clone.querySelector('.btn-remove').addEventListener('click', removeProduct);
  name.value = '';
  price.value = '';
  tbody.append(clone);

  //... your code goes here
}

const calculatePricesBtn = document.getElementById('calculate');
calculatePricesBtn.addEventListener('click', calculateAll);
const removeButtons = document.querySelectorAll('.btn-remove');

document.getElementById('create').addEventListener('click', createProduct);

removeButtons.forEach((button) => {
  button.addEventListener('click', removeProduct);
});
//... your code goes here
