document.addEventListener("DOMContentLoaded", function(){
    const mainImage = document.getElementById("mainProductImage");
    const thumbnails = document.querySelectorAll(".thumbnail");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function(){
            mainImage.src = this.dataset.large;

            thumbnails.forEach(img => img.classList.remove("active"));
            this.classList.add("active");
        });
    });
});