document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('fruit-graph-canvas').getContext('2d');
    var chart;

    function updateGraph() {
        // Get the current date
        var currentDate = new Date();
        // Set the end date to today
        var endDate = currentDate;

        // Set the start date to 15 days before today
        var startDate = new Date();
        startDate.setDate(currentDate.getDate() - 15);

        // Generate an array of dates between start and end date
        var dateLabels = [];
        while(startDate <= endDate){
            dateLabels.push(startDate.toLocaleDateString());
            startDate.setDate(startDate.getDate() + 1);
        }

        // Create the chart with updated data and options
        chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dateLabels,
                datasets: [
                    {
                        label: 'Apple (Rs/kg)',
                        data: [200,220,220,220,220,210,210,210,210,210,210,210,190,190,190,190],
                        fill: false,
                        borderColor: 'rgb(194, 20, 20)',
                        borderWidth: 2
                    },
                    {
                        label: 'Banana (Rs/kg)',
                        data: [ 46,45,45,45,45,42,42,42,42,40,40,40,45,45,45,45],
                        fill: false,
                        borderColor: 'yellow',
                        borderWidth: 2
                    },
                    {
                        label: 'orange (Rs/kg)',
                        data: [ 62,56,56,56,56,56,56,56,56,55,55,55,60,60,60,60],
                        fill: false,
                        borderColor: 'orange',
                        borderWidth: 2
                    },
                    {
                        label: 'Guava (Rs/kg)',
                        data: [ 44,44,44,44,44,43,43,43,43,44,44,44,43,43,43,43],
                        fill: false,
                        borderColor: 'green',
                        borderWidth: 2
                    },
                    {
                        label: 'Pomegranate (Rs/kg)',
                        data: [125,135,135,135,135,135,135,135,135,115,115,115,125,125,125,125],
                        fill: false,
                        borderColor: 'red',
                        borderWidth: 2
                    },
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: false,
                        max: 250,
                        min: 25,
                        stepSize: 25
                    }
                }
            }
        });
    }

    // Update the graph initially
    updateGraph();
});
