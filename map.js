/**
 * Created by adityamullick on 9/21/17.
 */


// data array and corresponding marker array

var markers = [];
var map;

function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: uluru
    });

    // initial creation of map
    generateMap(numVisitors);
}

// generates a map with certain number of random visitors
function generateMap(numVisitors) {

    var latitude;
    var longitude;
    // generate random visitors and add them to global list
   //generateUsers(numVisitors);

    for(var i = 0; i < numVisitors; i++) {
        var position = visitors[i].position;


        // create marker for view and push into array
        var marker = new google.maps.Marker({
            position: position,
            map: map
        });

        generateMarkerInfo(marker, visitors[i]);
        markers.push(marker);

    }

}
function generateMarkerInfo(marker, visitor) {
    //var visitor = getVisitor(marker.position);
    console.log("visitor in info is " + visitor);
    var visitorLat = Math.round(visitor.position.lat * 100) / 100;
    var visitorLng = Math.round(visitor.position.lng * 100) / 100;


    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading"></h1>'+
        '<div id="bodyContent">'+
        '<p><b>Name: ' + visitor.name + '</b></p>'+
        '<p><b>Position: ' +  visitorLat + ', ' + visitorLng +  '</b></p>'+
        '<p><b>Country: ' + visitor.country + '</b></p>'+
        '</div>'+
        '</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });


}

// helper function to get corresponding visitor of marker
function getVisitor(position) {

    var markerLat = Math.round(position.lat() * 100) / 100;
    var markerLng = Math.round(position.lng() * 100) / 100;

    for(var i = 0; i < visitors.length; i++) {


        var visitorLat = Math.round(visitors[i].position.lat * 100) / 100;
        var visitorLng = Math.round(visitors[i].position.lng * 100) / 100;


        if(visitorLat == markerLat && visitorLng == markerLng) {
            return visitors[i];
        }

    }
    return null;
}


function addMarker(position, visitor){
    var marker = new google.maps.Marker({
        position: position,
        map: map
    });
    markers.push(marker);
    console.log("marker in addMarker is " + marker);
    generateMarkerInfo(marker, visitor);


}

function mutateMarker(position, randVal, visitor) {
    // remove marker from map

    markers[randVal].setMap(null);

    var marker = new google.maps.Marker({
        position: position,
        map: map
    });

    marker.setMap(map);
    // generate the marker info
    generateMarkerInfo(marker, visitor);

    markers[randVal] = marker;

}

function removeMarker(randVal) {
    markers[randVal].setMap(null);
    markers.splice(randVal, 1);
}






