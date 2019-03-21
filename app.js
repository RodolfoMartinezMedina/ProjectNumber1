const searchVAR = "";
//const gooURL = "https://cors.io/?https://imgops.com/"
const gooURL = "https://cors.io/?https://www.google.com/searchbyimage?image_url="

$("button").on("click", function(){
    
    //  const searchData = $("input:text").val();
    const searchData = $(".img").attr("src");
    const googleImageURL = gooURL+searchData;
    console.log(googleImageURL);
     $.ajax({
        
         url:googleImageURL,
         method: 'GET'
     }).then(function (response){
         $(".dropzone").hide();
         $(".status").hide();
         const searchDiv = $("#here");
         
         searchDiv.append(response);
        
         $("#logo").hide();
         $(".logo").hide();
         $("#mdlogo").hide();
         $('img', this).attr('alt', 'google').hide();
         $(".doodle").hide();
         $("#center_col").css( { marginLeft : "10px"} );
         console.log(response);
     });
});
///////////////////////////
$("#capture").click(function () {
    $(".dropzone").fadeIn(3000);
    $("#here").animate({height: 'hide'});
    $("#myMap").animate({height: 'hide'});
    $("#searchB").fadeIn(3000);
    $("#capture").animate({height: 'hide'});
    $("#player").animate({height: 'hide'});
    $("#mapB").animate({height: 'hide'});
    $("#resultsB").animate({height: 'hide'});
});
$("#searchB").click(function () {
    $(".dropzone").animate({height: 'hide'});
    $("#here").fadeIn(3000);
    $("#myMap").animate({height: 'hide'});
    $("#searchB").fadeIn(3000);
    $("#capture").animate({height: 'hide'});
    $("#player").animate({height: 'hide'});
    $("#canvas").animate({height: 'hide'});
    $("#mapB").fadeIn(4200);
    $("#resultsB").animate({height: 'hide'});
    $(".cardheader").animate({height: 'hide'});
    for (var value=0; value > 1000; value++){

            $("div#progressbar").attr("aria-valuenow", value);
        console.log(value);
    };
});
$("#mapB").click(function () {
    $(".dropzone").animate({height: 'hide'});
    $("#here").animate({height: 'hide'});
    $("#myMap").fadeIn(3000);
    $("#searchB").animate({height: 'hide'});
    $("#capture").animate({height: 'hide'});
    $("#player").animate({height: 'hide'});
    $("#canvas").animate({height: 'hide'});
    $("#resultsB").fadeIn(3000);
    $("#mapB").fadeIn(3000);
    $(".cardheader").animate({height: 'hide'});
});
$("#resultsB").click(function () {
    $(".dropzone").animate({height: 'hide'});
    $("#here").fadeIn(3000);
    $("#myMap").animate({height: 'hide'});
    $("#searchB").animate({height: 'hide'});
    $("#capture").animate({height: 'hide'});
    $("#player").animate({height: 'hide'});
    $("#canvas").animate({height: 'hide'});
    $("#mapB").fadeIn(3000);
    $("#resultsB").fadeIn(3000);
    $(".cardheader").animate({height: 'hide'});
    $("#center_col").css( { marginLeft : "10px"} );
});



///////////////////////////
