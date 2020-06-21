import lightbox from "lightbox2/dist/js/lightbox-plus-jquery";

document.addEventListener("DOMContentLoaded", function(){
    lightbox.option({
        "albumLabel": "Фотография %1 из %2",
        "disableScrolling": true,
        "fadeDuration": 200
    });
});