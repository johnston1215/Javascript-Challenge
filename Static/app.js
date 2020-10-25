// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// check data
// console.log(data);

// Initial loop / Append to tables
data.forEach(function(sighting) {
    // console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
      // console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {
  // Prevent the page from refreshing and clear table
  d3.event.preventDefault();
  tbody.html("");
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  var filteredData = data.filter(data => data.datetime === inputValue);
  console.log(filteredData);
  
  // Add to website
  filteredData.forEach(function(sighting) {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });

};