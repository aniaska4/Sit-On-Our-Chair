document.addEventListener('DOMContentLoaded', function() {

//slaider
    var slider = document.querySelector(".slider"); // pobieramy slider
    var slides = document.querySelectorAll(".slider-slide"); //pobieramy zdjęcia
    var current = 0; // licznik slajdów
    var btnLeft = slider.querySelector(".btn-left"); //przycisk Lewy
    var btnRight = slider.querySelector(".btn-right");//przycisk prawy
    
    /*przycisk RIGHT*/
    btnRight.addEventListener('click', function(e){ 
        for(var el of slides){/*robię petle po zdjęciach*/
            el.classList.remove("active"); /*usuwam zdjęciom klase active*/
        }
      

        current--; /*liczymy obecny slajd do tyłu bo to btn Left - czyli minus*/
        if(current < 0) {
            current = slides.length - 1;
        }

        slides[current].classList.add("active");/*dodajemy klase do aktywnego slajdu*/
    });


     
    /*przycisk LEFT*/
    btnLeft.addEventListener("click", function(e){
        for(var el of slides){
            el.classList.remove("active");
        }

        current++; /*inkrementacja bo licznikiem idziemy do góry*/
        if(current >= slides.length + 1){
            current = 0;
        }

        slides[current].classList.add("active");
    });



    //DROPMENU-menu

    var drop = document.querySelector(".nav_item"); //li
    var list = document.querySelector(".droopdown"); //ul
    
        drop.addEventListener("mouseover", function(){
            list.style.display = "block" 
        })

        drop.addEventListener("mouseout", function(){
            list.style.display = "none"
        })


    //Obrazy z oferty
    
    var box1 = document.querySelector(".img1"); //rodzic
    var box2 = document.querySelector(".img2");    
    var image = document.querySelector(".title1"); //dziecko
    var image2 = document.querySelector(".title2");
    
        box1.addEventListener("mouseover", function (){
            image.style.display = "none";
        });
        box1.addEventListener("mouseout", function (){
            image.style.display = "block";
        });
    

    
        box2.addEventListener("mouseover", function (){
            image2.style.display = "none";
        });
        box2.addEventListener("mouseout", function (){
            image2.style.display = "block";
        });
    
       




});