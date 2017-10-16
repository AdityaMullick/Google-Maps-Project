/**
 * Created by adityamullick on 9/26/17.
 */

var visitors = [];
var timeInterval = 2;
var numVisitors = 2;


// country names
var countries = ['USA', 'Greece', 'Spain', 'Italy', 'Hello'];


function load() {

    generateUsers(numVisitors);
    // start the demo
    initMap();
    createTable();
    createChart();
    setInterval(function(){ update(); }, timeInterval * 1000);


}

// create a list of random users
function generateUsers(numVisitors) {

    var latitude;
    var longitude;
    // generate random visitors and add them to global list

    for(var i = 0; i < numVisitors; i++) {
        var visitor = {};
        // generate random name
        var name = chance.name();
        visitor.name = name;

        // generate a random country
        var randVal = Math.floor(Math.random() * countries.length);
        visitor.country = countries[randVal];

        // random latitude and longitude
        latitude = (Math.random() * 150) - 60;
        longitude = (Math.random() * 150) + 25;

        // create position variable
        var position = {lat: latitude, lng: longitude};
        visitor.position = position;
        visitors.push(visitor);

    }
    document.getElementById("tracker").innerText = visitors.length;
    document.getElementById("status").innerText = "Demo Created";



}


// add a visitor and update corresponding views

function addVisitor() {

    var visitor = {};
    visitor.name = chance.name();

    // generate a random position
    var latitude = (Math.random() * 150) - 50;
    var longitude = (Math.random() * 150) + 25;
    var position = {lat: latitude, lng: longitude};
    visitor.position = position;

    // generate a random country
    var randVal = Math.floor(Math.random() * countries.length);
    visitor.country = countries[randVal];
    visitors.push(visitor);
    addMarker(position, visitor);

    // update table info
    addCountry(visitor.country);

    // update tracker
    document.getElementById("tracker").innerText = visitors.length;

    var markerLat = Math.round(visitor.position.lat * 100) / 100;
    var markerLng = Math.round(visitor.position.lng * 100) / 100;

    // update status
    document.getElementById("status").innerText = "Inserting " + visitor.name + " to "
                                                + "(" + markerLat + ", " + markerLng + ")";
    updateChart(visitors.length);



}



function mutateVisitor() {

    // generate random index to update
    var randValue = Math.floor(Math.random() * visitors.length);
    var visitor = visitors[randValue];
    if(typeof(visitor) == "undefined") {
        return;
    }

    var formerLat = Math.round(visitors[randValue].position.lat * 100) / 100;
    var formerLng = Math.round(visitors[randValue].position.lng * 100) / 100;




    // random latitude and longitude
    var latitude = (Math.random() * 150) - 60;
    var longitude = (Math.random() * 150) + 25;

    var newLat = Math.round(latitude * 100) / 100;
    var newLng = Math.round(longitude * 100) / 100;

    // create position variable
    var position = {lat: latitude, lng: longitude};
    visitor.position = position;

    mutateMarker(position, randValue, visitor);


    // update status
    document.getElementById("status").innerText = "Moving " + visitors[randValue].name + " from "
        + "(" + formerLat + ", " + formerLng + ")" + " to " + "(" + newLat + ", " + newLng + ")";


    // update tracker
    document.getElementById("tracker").innerText =  visitors.length;

    // update chart
    updateChart(visitors.length);


}

// remove a random visitor and update the views
function removeVisitor() {
    if(visitors.length == 0) {
        return;
    }



    // generate random index to update
    var randVal = Math.floor(Math.random() * visitors.length);

    var markerLat = Math.round(visitors[randVal].position.lat * 100) / 100;
    var markerLng = Math.round(visitors[randVal].position.lng * 100) / 100;

    // update status
    document.getElementById("status").innerText = "Removing " + visitors[randVal].name + " from "
        + "(" + markerLat + ", " + markerLng + ")";

    // remove country from table
    removeCountry(visitors[randVal].country);

    // remove visitor data
    visitors.splice(randVal, 1);

    // remove marker from map
    removeMarker(randVal);


    // update chart
    updateChart(visitors.length);

    document.getElementById("tracker").innerText = visitors.length;





}




function update() {



    // generate random value
    var randVal = Math.random();


     // deletes
    if(randVal < 0.33 && visitors.length  > 0) {
        removeVisitor();

    }
    else if(randVal < .66) {
        addVisitor();

    }
    else {
        mutateVisitor();

    }




}




