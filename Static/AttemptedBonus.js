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
// var button = d3.select("#filter-btn");   THIS WAS MY FINAL CODE
// Select the form
// var form = d3.select("#form");    THIS WAS MY FINAL CODE
var inputElement = d3.select("input");  // THIS WAS ADDED

// Create event handlers 
// button.on("click", runEnter);  THIS WAS MY FINAL CODE
// form.on("submit", runEnter);  THIS WAS MY FINAL CODE
inputElement.on("change", runEnter);  // THIS WAS ADDED
var filters = {} // THIS WAS ADDED

// Complete the event handler function for the form
function runEnter() {
  // Prevent the page from refreshing and clear table
  d3.event.preventDefault();
  tbody.html("");
  // Select the input element and get the raw HTML node
  // THIS WAS MY FINAL CODE var inputElement = d3.select("#datetime");
  // console.log("Line 35" , this.id);  // THIS WAS ADDED
  // var inputID = this.id;  //  THIS WAS ADDED
  filters[this.id] = this.value; //THIS WAS ADDED
  console.log(filters) // THIS WAS ADDED

  // Get the value property of the input element
  // THIS WAS MY FINAL CODE var inputValue = inputElement.property("value");
  // THIS WAS MY FINAL CODE console.log(inputValue);
  // THIS WAS MY FINAL CODE var filteredData = data.filter(data => data.datetime === inputValue);
  var filteredData = data.filter(data => data[Object.keys(filters)[0]] === Object.values(filters)[0]); // THIS WAS ADDED
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