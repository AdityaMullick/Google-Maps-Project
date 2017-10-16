
var chart;
function createChart() {
    chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "Number of Visitors on Map"
        },
        data: [
            {
                type: "spline",
                dataPoints: [
                    { y: visitors.length },
                ]
            }
        ]
    });



    chart.render();
}

function updateChart(length) {
    chart.options.data[0].dataPoints.push({y: length});

    chart.render();
}
