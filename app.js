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
    $("#here").hide(); 
    $("#myMap").hide();
    $("#searchB").show();
    $("#capture").hide();
    $("#player").hide();
    $("#mapB").hide();
    $("#resultsB").hide();
});
$("#searchB").click(function () {
    $(".dropzone").hide();
    $("#here").show(); 
    $("#myMap").hide();
    $("#searchB").show();
    $("#capture").hide();
    $("#player").hide();
    $("#canvas").hide();
    $("#mapB").show();
    $("#resultsB").hide();
    $(".cardheader").hide();
});
$("#mapB").click(function () {
    $(".dropzone").hide();
    $("#here").hide(); 
    $("#myMap").show();
    $("#searchB").hide();
    $("#capture").hide();
    $("#player").hide();
    $("#canvas").hide();
    $("#resultsB").show();
    $("#mapB").show();
    $(".cardheader").hide();
})
$("#resultsB").click(function () {
    $(".dropzone").hide();
    $("#here").show(); 
    $("#myMap").hide();
    $("#searchB").hide();
    $("#capture").hide();
    $("#player").hide();
    $("#canvas").hide();
    $("#mapB").show();
    $("#resultsB").show();
    $(".cardheader").hide();
});



///////////////////////////
