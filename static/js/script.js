// console.log("Hello AJ here ...");

document.addEventListener('DOMContentLoaded', function(){
    // Payment Method Toggle
    const radios = document.querySelectorAll('input[name="payment_method"]');
    const button = document.getElementById('actionbtn');
    const baseText = button.textContent.trim();

    const variants = document.querySelectorAll('input[name="variant"]')
    const price = document.getElementById('price')

    radios.forEach(radio => {
        radio.addEventListener('change', function(){
            button.textContent = `${baseText} using ${this.value}`;
        });
    });

<<<<<<< Updated upstream
=======
    // Variant Button Toggle
    const variants = document.querySelectorAll('input[name="variant"]')
    const price = document.getElementById('price')

>>>>>>> Stashed changes
    variants.forEach(variant => {
        variant.addEventListener('change', function(){
            price.textContent = this.dataset.price;
        });
    });

    const toggle = document.getElementById('toggle')
    const box = document.getElementById('box')

    toggle.addEventListener("click", function(){
        box.style.display = box.style.display === 'none' ? 'block' : 'none';
        toggle.textContent = toggle.textContent === 'Hide' ? 'Show' : 'Hide';
    });

});
