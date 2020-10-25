// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// check data
console.log(data);

// Initial loop / Append to tables
data.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
