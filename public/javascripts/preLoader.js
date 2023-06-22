window.addEventListener("load", function(){
    const loader = document.querySelector(".loader");
    setTimeout(function() {
        loader.classList.add("hidden"); //La clase a la que cambia (para desaparecer)
    }, 1000); // el tiempo que se mostrará.
});
