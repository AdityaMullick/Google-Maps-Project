/**
 * Created by adityamullick on 9/21/17.
 */
console.log("hello");
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    //  push new point to the data array
    var elem = [];
    elem.push(graphInterval);
    elem.push(visitors.length);
    data.push(elem);
    graphInterval++;



    var graphData = google.visualization.arrayToDataTable(data);

    var options = {
        title: 'Visitor Count',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
    chart.draw(graphData, options);


}
