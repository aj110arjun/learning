// console.log("Hello AJ here ...");

document.addEventListener('DOMContentLoaded', function(){
    const radios = document.querySelectorAll('input[name="payment_method"]');
    const button = document.getElementById('actionbtn');
    const baseText = button.textContent.trim()

    radios.forEach(radio => {
        radio.addEventListener('change', function(){
            button.textContent = `${baseText} using ${this.value}`;
        });
    });
});
