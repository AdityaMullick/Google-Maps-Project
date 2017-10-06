/**
 * Created by adityamullick on 9/21/17.
 */

// for the table
var tableInfo = {};
tableInfo['Spain'] = 0;
tableInfo['Italy'] = 0;
tableInfo['USA'] = 0;
tableInfo['Greece'] = 0;

function createTable() {
    // create data table for view
    // iterate through each row and update the column accordingly

    generateInfo();


    // update cell of the updated number
    var table = document.getElementById("myTable");
    for(var i = 1, row; row = table.rows[i]; i++) {
        var country = row.cells[0].innerText;
        var numVisitors = row.cells[1];
        numVisitors.innerText = tableInfo[country];

    }


}

function generateInfo() {
    // iterate through visitors and check each country
    for(var i = 0; i < visitors.length; i++) {
        tableInfo[visitors[i].country]++;
    }


}

function updateTable(country) {
    var table = document.getElementById("myTable");

    for(var i = 1, row; row = table.rows[i]; i++) {
        var value = row.cells[0].innerText;
        if(value === country) {
            row.cells[1].innerText = tableInfo[country];
            return;
        }

    }



}



// add country from table
function addCountry(country) {
    tableInfo[country]++;

    // update the table
    updateTable(country);

}

// remove country from table
function removeCountry(country) {
    tableInfo[country]--;

    // update the table
    updateTable(country);

}







