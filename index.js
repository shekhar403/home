$(".big_image").hide();
$(".big_image").css("visibility", "visible");

$(".myImage").click(function (e) { 
    console.log("image")
    $(".big_image").fadeToggle();
    
});

$(document).click(function (e) {
    if ($('.big_image').not(':hidden') && e.target.classList.value !== "myImage"){
        
        $(".big_image").hide();
    }
   
    
});
