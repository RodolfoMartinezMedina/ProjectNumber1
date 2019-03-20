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
})
$("#searchB").click(function () {
    $(".dropzone").hide();
    $("#here").show(); 
    $("#myMap").hide();
    $("#searchB").show();
    $("#capture").hide();
    $("#player").hide();
    $("#canvas").hide();
})


///////////////////////////
