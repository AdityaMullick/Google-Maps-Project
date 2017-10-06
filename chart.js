
var chart;
function createChart() {
    chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "Adding & Updating dataPoints"
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
