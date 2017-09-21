/**
 * Created by adityamullick on 9/21/17.
 */
google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawTable);

function drawTable() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Country');
    data.addColumn('number', 'Visitors');
    data.addRows([
        ['Mike',  {v: 10000, f: '$10,000'}],
        ['Jim',   {v:8000,   f: '$8,000'}],
        ['Alice', {v: 12500, f: '$12,500'}],
        ['Bob',   {v: 7000,  f: '$7,000'}]
    ]);

    var table = new google.visualization.Table(document.getElementById('table_div'));

    table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
}
