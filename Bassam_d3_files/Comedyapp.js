d3.csv("Clean_Best_Films_2000_2020_test.csv").then(function(data) {
  //  Create the Traces
  let trace1 = {
    x: data.Genre,
    y: data.Star_rating,
    type: "scatter",
    name: "Star Rating and Genre",
    
    boxpoints: "all"
  };

  // Create the data array for the plot
  let chartData = [trace1];

  // Define the plot layout
  let layout = {
    title: "Graph",
    xaxis: { title: "test" },
    yaxis: { title: "test" }
  };

  // Plot the chart to a div tag with id "plot"
  Plotly.newPlot("Comedyapp", data, layout);
});