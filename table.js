/**
 * Created by adityamullick on 9/21/17.
 */

// for the table


var tableInfo = {};
function createTable() {
    // create data table for view
    // iterate through each row and update the column accordingly


    var table = document.getElementById("myTable");


    for (var i = 0; i < visitors.length; i++) {
        // if the key already exists, increment
        console.log("country is " + visitors[i].country);
        if (typeof(tableInfo[visitors[i].country]) == "undefined" || tableInfo[visitors[i].country] == null) {
            tableInfo[visitors[i].country] = {};
            tableInfo[visitors[i].country].numElems = 1;
            var row = table.insertRow(table.rows.length);
            tableInfo[visitors[i].country].row = row;
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = visitors[i].country;
            cell2.innerHTML = 1;
        }
        else {
            tableInfo[visitors[i].country].numElems++;
            tableInfo[visitors[i].country].row.cells[1].innerHTML = tableInfo[visitors[i].country].numElems;


        }

    }


}







// add country from table
function addCountry(country) {


    console.log("the value of country is " + tableInfo[country]);

    // if new country does not exists, then create a cell
    if(typeof(tableInfo[country]) == "undefined" || tableInfo[country] === null) {
        insertRow(country);

    }
    else {
        tableInfo[country].numElems++;
        tableInfo[country].row.cells[1].innerHTML = tableInfo[country].numElems;
    }

}

function insertRow(country) {

    // insert a new row corresponding to country
    var table = document.getElementById("myTable");
    console.log(table);

    tableInfo[country] = {};
    tableInfo[country].numElems = 1;
    var row = table.insertRow(table.rows.length);
    tableInfo[country].row = row;
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = country;
    cell2.innerHTML = 1;
}


// remove country from table
function removeCountry(country) {

    //if there is only one visitor in the country, remove the row from the table
    if(tableInfo[country].numElems == 1) {
        removeRow(country);
        tableInfo[country] = null;
    }
    else {

        tableInfo[country].numElems--;
        tableInfo[country].row.cells[1].innerHTML = tableInfo[country].numElems;

    }

}

function removeRow(country) {
    // insert a new row corresponding to country
    var table = document.getElementById("myTable");
    var index = tableInfo[country].row.rowIndex;
    table.deleteRow(index);


}




/**
 *     <tr>
 <th>Country</th>
 <th>Number of Visitors</th>
 </tr>
 <tr>
 <td>Spain</td>
 <td>Germany</td>
 </tr>
 <tr>
 <td>Italy</td>
 <td>Mexico</td>
 </tr>
 <tr>
 <td>USA</td>
 <td>Austria</td>
 </tr>
 <tr>
 <td>Greece</td>
 <td>UK</td>
 </tr>
 */







