document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('vegetable-graph-canvas').getContext('2d');
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
        Chart.defaults.color = "black";


        // Create the chart with updated data and options
        chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dateLabels,
                datasets: [
                    {
                        label: 'Tomatoes (Rs/kg)',
                        data: [18,17,17,17,17,18,18,18,18,18,18,18,17,17,17,17],
                        fill: false,
                        borderColor: 'red',
                        borderWidth: 2,
                    },
                    {
                        label: 'Small Onions (Rs/kg)',
                        data: [50,54,54,54,54,50,50,50,50,50,50,50,53,53,53,53],
                        fill: false,
                        borderColor: '#c07b7b',
                        borderWidth: 2
                    },
                    {
                        label: 'Big Onions (Rs/kg)',
                        data: [21,22,22,22,22,17,17,17,17,21,21,21,19,19,19,19],
                        fill: false,
                        borderColor: '#f06161',
                        borderWidth: 2
                    },
                    {
                        label: 'Green Chilli (Rs/kg)',
                        data: [45,38,38,38,38,41,41,41,41,45,45,45,38,38,38,38],
                        fill: false,
                        borderColor: 'green',
                        borderWidth: 2
                    },
                    {
                        label: 'Beetroot (Rs/kg)',
                        data: [30,31,31,31,31,36,36,36,36,36,36,36,30,30,30,30],
                        fill: false,
                        borderColor: '#7c0000',
                        borderWidth: 2
                    },
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: false,
                        max: 60,
                        min: 15,
                        stepSize: 5,
                    }
                }
            }
        });
    }

    // Update the graph initially
    updateGraph();
});
