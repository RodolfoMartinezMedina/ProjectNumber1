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
         $("#mdlogo").hide();
         $('img', this).attr('alt', 'google').hide();
         $(".doodle").hide();

         console.log(response);
     });
});
///////////////////////////
$("#capture").click(function () {
    $(".dropzone").show();
    $("#here").animate({height: 'hide'});
    $("#myMap").animate({height: 'hide'});
    $("#searchB").show();
    $("#capture").animate({height: 'hide'});
    $("#player").animate({height: 'hide'});
    $("#mapB").animate({height: 'hide'});
    $("#resultsB").animate({height: 'hide'});
});
$("#searchB").click(function () {
    $(".dropzone").animate({height: 'hide'});
    $("#here").show(); 
    $("#myMap").animate({height: 'hide'});
    $("#searchB").show();
    $("#capture").animate({height: 'hide'});
    $("#player").animate({height: 'hide'});
    $("#canvas").animate({height: 'hide'});
    $("#mapB").show();
    $("#resultsB").animate({height: 'hide'});
    $(".cardheader").animate({height: 'hide'});
});
$("#mapB").click(function () {
    $(".dropzone").animate({height: 'hide'});
    $("#here").animate({height: 'hide'});
    $("#myMap").show();
    $("#searchB").animate({height: 'hide'});
    $("#capture").animate({height: 'hide'});
    $("#player").animate({height: 'hide'});
    $("#canvas").animate({height: 'hide'});
    $("#resultsB").show();
    $("#mapB").show();
    $(".cardheader").animate({height: 'hide'});
})
$("#resultsB").click(function () {
    $(".dropzone").animate({height: 'hide'});
    $("#here").show(); 
    $("#myMap").animate({height: 'hide'});
    $("#searchB").animate({height: 'hide'});
    $("#capture").animate({height: 'hide'});
    $("#player").animate({height: 'hide'});
    $("#canvas").animate({height: 'hide'});
    $("#mapB").show();
    $("#resultsB").show();
    $(".cardheader").animate({height: 'hide'});
});



///////////////////////////
