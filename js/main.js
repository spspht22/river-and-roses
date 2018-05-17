
// change background to fixed navbar
$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#carouselExampleControls');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar").css('background-color', '#f0f0f0');
       } else {
          $(".navbar").css('background-color', '#f05f40b5', 'color', 'white');
       }
   });
    }
});

// google map
function initMap() {
  // google maps has the best easy to read documentation
  let myMapDiv = document.getElementById("myMap");
  let myMap = new google.maps.Map( myMapDiv, {
    center: {
      lat: 38.0886854,
      lng: -122.5543361
    },
    zoom: 15,
    mapTypeId: "satellite"
  });
  let tajMarker = new google.maps.Marker({
    position:  {
      lat: 38.0886854,
      lng: -122.5543361
    },
    map: myMap,
    title: "This is where we perform"
  });
  // this is the google object ^^^^
}