document.addEventListener("DOMContentLoaded", function(){
    let reviewText = document.querySelectorAll(".review-text-more");

    if (reviewText.length) {
        reviewText.forEach(function(item){
            if (item.querySelector("p").clientHeight > "80"){
                item.classList.add("is-close");
            }

            item.querySelector("button").addEventListener("click", function () {
                item.classList.remove("is-close");
            });
        });
    }
});