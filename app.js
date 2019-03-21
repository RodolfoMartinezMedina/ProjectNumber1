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
    $(".dropzone").animate({width: 'show'});
    $("#here").animate({height: 'hide'});
    $("#myMap").animate({height: 'hide'});
    $("#searchB").animate({width: 'show'});
    $("#capture").animate({height: 'hide'});
    $("#player").animate({height: 'hide'});
    $("#mapB").animate({height: 'hide'});
    $("#resultsB").animate({height: 'hide'});
});
$("#searchB").click(function () {
    $(".dropzone").animate({height: 'hide'});
    $("#here").animate({width: 'show'});
    $("#myMap").animate({height: 'hide'});
    $("#searchB").animate({width: 'show'});
    $("#capture").animate({height: 'hide'});
    $("#player").animate({height: 'hide'});
    $("#canvas").animate({height: 'hide'});
    $("#mapB").animate({width: 'show'});
    $("#resultsB").animate({height: 'hide'});
    $(".cardheader").animate({height: 'hide'});
});
$("#mapB").click(function () {
    $(".dropzone").animate({height: 'hide'});
    $("#here").animate({height: 'hide'});
    $("#myMap").animate({width: 'show'});
    $("#searchB").animate({height: 'hide'});
    $("#capture").animate({height: 'hide'});
    $("#player").animate({height: 'hide'});
    $("#canvas").animate({height: 'hide'});
    $("#resultsB").animate({width: 'show'});
    $("#mapB").animate({width: 'show'});
    $(".cardheader").animate({height: 'hide'});
})
$("#resultsB").click(function () {
    $(".dropzone").animate({height: 'hide'});
    $("#here").animate({width: 'show'});
    $("#myMap").animate({height: 'hide'});
    $("#searchB").animate({height: 'hide'});
    $("#capture").animate({height: 'hide'});
    $("#player").animate({height: 'hide'});
    $("#canvas").animate({height: 'hide'});
    $("#mapB").animate({width: 'show'});
    $("#resultsB").animate({width: 'show'});
    $(".cardheader").animate({height: 'hide'});
});



///////////////////////////
