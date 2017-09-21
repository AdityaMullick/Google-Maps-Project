/**
 * Created by adityamullick on 9/21/17.
 */

var numVisitors = 10;

// data array and corresponding marker array
var visitors = [];
var markers = [];
var timeInterval = 3;

// map variables
var data = [];
var labels = ['Number of Visitors', 'Time Increment'];
data.push(labels);
var graphInterval = 0;

// generates a map with certain number of random visitors
function generateMap(numVisitors, map) {

    var latitude;
    var longitude;
    // generate random visitors and add them to global list
    generateUsers(numVisitors);

    for(var i = 0; i < numVisitors; i++) {
        var position = visitors[i];

        // create marker for view and push into array
        var marker = new google.maps.Marker({
            position: position,
            map: map
        });
        markers.push(marker);

    }

    // update tracker
    document.getElementById("tracker").innerText = "Number of visitors: " + visitors.length;

}
function generateUsers(numVisitors) {
    var latitude;
    var longitude;
    // generate random visitors and add them to global list

    for(var i = 0; i < numVisitors; i++) {
        // random latitude and longitude
        latitude = (Math.random() * 150) - 50;
        longitude = (Math.random() * 150) + 25;

        // create position variable
        var position = {lat: latitude, lng: longitude};
        visitors.push(position);

    }

}

function updateMap(map, chart) {

    // generate random value
    var randVal = Math.random();

    console.log(randVal);

    // deletes
    if(randVal < 0.33 && visitors.length  > 0) {
        removeVisitor(map);

    }
    else if(randVal < .66) {
        addVisitor(map);

    }
    else {
        insertVisitor(map);

    }




    // update tracker
    document.getElementById("tracker").innerText = "Number of visitors: " + visitors.length;

    // update chart
    drawChart();

}

// remove a random visitor
function removeVisitor(map) {
    if(visitors.length == 0) {
        return;
    }

    // generate random index to update
    var randVal = Math.floor(Math.random() * visitors.length);

    // remove visitor data
    visitors.splice(randVal, 1);

    // remove marker from map
    markers[randVal].setMap(null);
    markers.splice(randVal, 1);




}



function addVisitor(map) {


    var latitude = (Math.random() * 150) - 50;
    var longitude = (Math.random() * 150) + 25;
    var position = {lat: latitude, lng: longitude};
    visitors.push(position);
    var marker = new google.maps.Marker({
        position: position,
        map: map
    });
    markers.push(marker);
    marker.setMap(map);


}

function insertVisitor(map) {


    // generate random index to update
    var randVal = Math.floor(Math.random() * visitors.length);

    console.log(markers[randVal]);
    // remove marker from map
    markers[randVal].setMap(null);



    // random latitude and longitude
    var latitude = (Math.random() * 150) - 50;
    var longitude = (Math.random() * 150) + 25;

    // create position variable
    var position = {lat: latitude, lng: longitude};

    visitors[randVal] = position;
    var marker = new google.maps.Marker({
        position: position,
        map: map
    });
    marker.setMap(map);

    markers[randVal] = marker;








}


function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: uluru
    });

    // initial creation of map
    generateMap(numVisitors, map);

    // update map
    setInterval(function(){ updateMap(map); }, timeInterval * 1000);

}