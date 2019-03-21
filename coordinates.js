var x = document.getElementById("demo");
var y = "";

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }


  function showPosition(position) {
    //x.innerHTML = "Latitude: " + position.coords.latitude + "," + position.coords.longitude;
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    GetMap(lat, lng);
    
  };

  console.log(GetMap)

  function GetMap(lat, lng) {
    console.log(lat,lng);
    var map = new Microsoft.Maps.Map('#myMap', {
      center: new Microsoft.Maps.Location(lat, lng),
      mapTypeId: Microsoft.Maps.MapTypeId.aerial,
      zoom: 30
    });
    console.log(lat,lng);
  }
}


///////////////////////////
 $(".dropzone").hide();
    $("#here").hide(); 
    $("#myMap").hide();
    $("#searchB").hide();
    $("#capture").show();
    $("#player").show();
    $("#mapB").hide();
    $("#resultsB").hide();
