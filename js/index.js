$(document).ready(function () {

    $('#menuBar').load('menu.html');
    // $('#menuBarResponsive').load('menu.html');
    $('#footerContent').load('footer.html');
    
    // Responsive Menu


    $('#hamburgericon').click(function(){

        if ($('.menuBarResponsive').css("display") === "none") {
            $('.menuBarResponsive').css("display", "block")
        } else {
            $('.menuBarResponsive').css("display", "none")
        }
    
    });


    


    // Illustration expansion
   
    $('.titleExpandIllustration').click(function(){

    if ($('.imagesIllustration').css("display") === "none") {
        $('.imagesIllustration').css("display", "flex")
        // $('.illustrationTitle').css('text-decoration', 'none')
    } else {
        $('.imagesIllustration').css("display", "none")
        // $('.illustrationTitle').css('text-decoration', 'underline','text-decoration-color', '#85BFAE')
    }

});

// Vector Explansion

$('.titleExpandVector').click(function(){

    if ($('.imagesVector').css("display") === "none") {
        $('.imagesVector').css("display", "flex")
        // $('#chevronVector').css('display', 'none')
    } else {
        $('.imagesVector').css("display", "none")
        // $('#chevronVector').css('display', 'block')
    }

});


// Graphs and Diagrams Expansion

$('.titleExpandGraphs').click(function(){

    if ($('.imagesGraphs').css("display") === "none") {
        $('.imagesGraphs').css("display", "flex")
        // $('#chevronGraphs').css('display', 'none')
    } else {
        $('.imagesGraphs').css("display", "none")
        // $('#chevronGraphs').css('display', 'block')
    }

});


// Infogrpahics Expansion

$('.titleExpandInfographics').click(function(){

    if ($('.imagesInfographics').css("display") === "none") {
        $('.imagesInfographics').css("display", "flex")
        // $('#chevronInfographics').css('display', 'none')
    } else {
        $('.imagesInfographics').css("display", "none")
        // $('#chevronInfographics').css('display', 'block')
    }

});


// Graphic Design Expansion

$('.titleExpandDesign').click(function(){

    if ($('.imagesDesign').css("display") === "none") {
        $('.imagesDesign').css("display", "flex")
        // $('#chevronDesign').css('display', 'none')
    } else {
        $('.imagesDesign').css("display", "none")
        // $('#chevronDesign').css('display', 'block')
    }

});



// Fun Stuff and Sketches Expansion

$('.titleExpandFun').click(function(){

    if ($('.imagesFun').css("display") === "none") {
        $('.imagesFun').css("display", "flex")
        // $('#chevronFun').css('display', 'none')
    } else {
        $('.imagesFun').css("display", "none")
        // $('#chevronFun').css('display', 'block')
    }

});


});

