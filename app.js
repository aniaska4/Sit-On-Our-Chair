document.addEventListener('DOMContentLoaded', function() {


    var slider = document.querySelector(".slider"); // pobieramy slider
    var slides = document.querySelectorAll(".slider-slide"); //pobieramy zdjęcia
    var current = 0; // licznik slajdów
    var btnLeft = slider.querySelector(".btn-left"); //przycisk Lewy
    var btnRight = slider.querySelector(".btn-right");//przycisk prawy
    
    /*przycisk LEFT*/
    btnLeft.addEventListener('click', function(e){ 
        for(var el of slides){/*robię petle po zdjęciach*/
            this.classList.remove("active"); /*usuwam zdjęciom klase active*/
        }
      

        current--; /*liczymy obecny slajd do tyłu bo to btn Left - czyli minus*/
        if(current < 0) {
            current = slides.length - 1;
        }

        slides[current].classList.add("active");/*dodajemy klase do aktywnego slajdu*/
    });


     
    /*przycisk RIGHT*/
    btnRight.addEventListener("click", function(e){
        for(var el of slides){
            this.classList.remove("active");
        }

        current++; /*inkrementacja bo licznikiem idziemy do góry*/
        if(current > slides.length + 1){
            current = 0;
        }

        slides[current].classList.add("active");
    })


});