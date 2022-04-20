let homeButt = Array.from(document.querySelectorAll(".home-button"));
let cardsProduct = Array.from(document.querySelectorAll(".cards-product"));
let peopleSvg = Array.from(document.querySelectorAll(".people-svg"));
let cardsSubtitle = Array.from(document.querySelectorAll(".cards-subtitle"));
let priceButton = Array.from(document.querySelectorAll(".price-button"));

homeButt.map(e => e.addEventListener("click", function(event) {
    homeButt.map(e => {
        e.style.background = "#FFFFFF";
        e.style.color = "#23A6F0";
    });

    this.style.background = "#23A6F0";
    this.style.color = "#FFFFFF";
}));

cardsProduct.map(e => e.addEventListener("click", function(event) {  
    cardsProduct.map(e => e.style.background = "#FFFFFF");  
    this.style.color = "#FFFFFF"
    this.style.background = "#23A6F0";
    
    peopleSvg.map(e => e.style.fill = "#23A6F0");
    this.children[0].children[0].style.fill = "#FFFFFF"; 

    cardsSubtitle.map(e => e.style.color = "#737373");
    this.children[0].children[1].children[1].style.color = "#FFFFFF";
}));

$(document).ready(function(){
    $(".slider").slick({
        arrows: true,
        adaptiveHeight: true,
        waitForAnimate: false,
        fade: true,
        appendArrows: $(".slider-arrows"),
    });

    $(".slider").on("beforeChange", function(event, slick, currentSlide, nextSlide) {
        document.querySelector(".slider-count").innerHTML = nextSlide + 1 + " / 4";
     
            if(nextSlide === 0) {
                document.querySelector(".slider-title-text").innerHTML = "A rethink of how we work";
                document.querySelector(".slider-subtitle-text").innerHTML = "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.When you add work to your Slate calendar we automatically calculate useful insights about the financial health of your business.";
                document.querySelector(".slider-auctor-text").innerHTML = "Jim - Product Designer";
            } else if(nextSlide === 1) {
                document.querySelector(".slider-title-text").innerHTML = "Take the work out of your financial goals";
                document.querySelector(".slider-subtitle-text").innerHTML = "For many of us, the start of a new year is synonymous with setting big, lofty goals. From losing weight to saving up for a down payment, going to the gym to squashing credit card debt, New Year's is when we take stock, make plans, and set our course for the future.";
                document.querySelector(".slider-auctor-text").innerHTML = "JPMorgan Chase";
            } else if(nextSlide === 2) {
                document.querySelector(".slider-title-text").innerHTML = "Move it...and lose it";
                document.querySelector(".slider-subtitle-text").innerHTML = "Taking advantage of interest-free payments during the introductory period can help you quickly pay down debt, making your monthly payments more affordable and getting you closer to your goals.";
                document.querySelector(".slider-auctor-text").innerHTML = "Dop - Calavasskis";
            } else if(nextSlide === 3) {
                document.querySelector(".slider-title-text").innerHTML = "Get a reactor";
                document.querySelector(".slider-subtitle-text").innerHTML = "Slate can handle multiple event registrations with a single form submission using our related events feature. If desired, payments and gifts can be collected as part of the registration process.";
                document.querySelector(".slider-auctor-text").innerHTML = "Rea - Filing ";
            }
    })
})

priceButton.map(e => e.addEventListener("click", function(event){
    priceButton.map(e => {
        e.style.background = "#23A6F0"; 
        this.style.background = "#2DC071";
    });
}))

document.querySelector(".burger-button").addEventListener("click", function(){
    this.classList.toggle("active");
    document.querySelector(".burger-menu").classList.toggle("active");
})

Array.from(document.querySelectorAll(".burger-list")).map(e => e.addEventListener("click", function(event){
    document.querySelector(".burger-button").classList.toggle("active");
    document.querySelector(".burger-menu").classList.toggle("active");
}))

document.querySelector(".search-button").addEventListener("click", function(){
    this.classList.toggle("active");
    document.querySelector(".search-line").classList.toggle("active")
})