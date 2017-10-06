/**
 * Created by adityamullick on 9/26/17.
 */

var visitors = [];
var timeInterval = 3;
var numVisitors = 5;


// country names
var countries = ['USA', 'Greece', 'Spain', 'Italy'];


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
    document.getElementById("tracker").innerText = "Number of visitors: " + visitors.length;



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
    document.getElementById("tracker").innerText = "Number of visitors: " + visitors.length;

    updateChart(visitors.length);



}



function mutateVisitor() {

    var visitor = {};

    // generate random index to update
    var randValue = Math.floor(Math.random() * visitors.length);
    console.log("the value of randValue in mutateVisitor is " + randValue);

    // update the country
    removeCountry(visitors[randValue].country);

    var name = chance.name();
    visitor.name = name;


    // random latitude and longitude
    var latitude = (Math.random() * 150) - 60;
    var longitude = (Math.random() * 150) + 25;

    // create position variable
    var position = {lat: latitude, lng: longitude};
    visitor.position = position;

    // generate a random country
    var randVal = Math.floor(Math.random() * countries.length);
    visitor.country = countries[randVal];
    visitors[randVal] = visitor;



    mutateMarker(position, randValue, visitor);

    // update country
    addCountry(visitor.country);



    // update tracker
    document.getElementById("tracker").innerText = "Number of visitors: " + visitors.length;

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

    // remove country from table
    removeCountry(visitors[randVal].country);

    // remove visitor data
    visitors.splice(randVal, 1);

    // remove marker from map
    removeMarker(randVal);


    // update chart
    updateChart(visitors.length);

    document.getElementById("tracker").innerText = "Number of visitors: " + visitors.length;


}




function update() {

    console.log(visitors.length);
    console.log(markers.length);

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




