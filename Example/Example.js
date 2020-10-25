var table = d3.select("#fighters");
var tableBody = table.select("tbody");

function createDefault() {
    fighters.forEach(fighter => {
        row = tableBody.append("tr")
        row.append("td").text(fighter.id);
        row.append("td").text(fighter.displayNameEn);
        row.append("td").text(fighter.series);

    });
}
createDefault();

var characterSearchField = d3.select("#characterSearch");
var characterSearchButton = d3.select("#characterSearchButton");
var seriesSearchField = d3.select("#seriesSearch");
var resetButton = d3.select("#resetAllButton");

resetButton.on("click", () => {
    tableBody.remove();
    tableBody = table.append("tbody");
    createDefault();
});

seriesSearchField.on("keyup", () => {
    var seriesToSearchFor = seriesSearchField.property("value");
    if (seriesToSearchFor.length >= 3) {
        tableBody.remove();
        tableBody = table.append("tbody");

        fighters.filter(f => f.series.toLowerCase().trim() == seriesToSearchFor.toLowerCase().trim())
            .forEach(fighter => {
                var row = tableBody.append("tr");
                row.append("td").text(fighter.id);
                row.append("td").text(fighter.displayNameEn);
                row.append("td").text(fighter.series);
            });

    }
});

characterSearchButton.on("click", () => {
    var characterToSearchFor = characterSearchField.property("value");
    console.log(characterToSearchFor);
    tableBody.remove();
    tableBody = table.append("tbody");

    fighters.filter(f => f.displayNameEn.toLowerCase().trim() == characterToSearchFor.toLowerCase().trim())
        .forEach(fighter => {
            var row = tableBody.append("tr");
            row.append("td").text(fighter.id);
            row.append("td").text(fighter.displayNameEn);
            row.append("td").text(fighter.series);
        });

})