// scripts.js

document.querySelectorAll('.product-item button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Produto adicionado ao carrinho!');
    });
});
