
const searchVAR = "";
//const gooURL = "https://cors.io/?https://imgops.com/upload"
const gooURL = "https://cors.io/?https://www.google.com/searchbyimage?image_url="

$("button").on("click", function(){
    
    const searchData = $("input:text").val();
    const googleImageURL = gooURL+searchData;
    console.log(googleImageURL);
     $.ajax({
        
         url:googleImageURL,
         method: 'GET'
     }).then(function (response){
         const searchDiv = $("#here").addClass("card-body");
         
        searchDiv.append(response);
         $("#mlogo").hide();
         $('img', this).attr('alt', 'google').hide();
         console.log(response);
     });
});
