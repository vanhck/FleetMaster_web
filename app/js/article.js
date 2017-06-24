// returns userlist
function getArticleliste() {
  $.get( "http://martinshare.com/api/van.php/warenliste", function( data ) {
    warenliste = JSON.parse(data);
    //return object
    setData(warenliste);
  });
}

// returns activitylist
function getActivityliste(id) {
  $.get( "http://martinshare.com/api/van.php/historyware/" + id, function( data ) {
    activitylist = JSON.parse(data);
    //return object
    setActivity(activitylist);
  });
}


function setData(warenliste) {
  var table = document.getElementById("articletable");


  if (document.getElementsByClassName("articleRow") != null) {
    console.log("tried");
    $('.articleRow').remove();
  }

  for (var i = 0; i < warenliste.length; i++) {

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(1);

    if (warenliste[i]["available"] == "true") {
      row.className = "articleRow success";
    } else if (warenliste[i]["available"] == "false") {
      row.className = "articleRow danger";
    } else {
      row.className = "articleRow";
    }


    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    // Add some text to the new cells:
    var id = warenliste[i]["id"];
    cell1.innerHTML = '<a onclick="getActivityliste(' + id + ')">' + id + '</a>';
    cell2.innerHTML = warenliste[i]["name"];

  }


}


function setActivity(activitylist) {
  var table = "<table class='table table-striped table-bordered table-hover'>";
  for (var i = 0; i < activitylist.length; i++) {
    //table += "<td>" + activitylist[i]["einchecktyp"] + "</td>";
    if (activitylist[i]["einchecktyp"] == "in") {
      table += "<tr class='info'>";
      table += "<td><i class='fa fa-long-arrow-right fa-fw'></i></td>";
    } else if (activitylist[i]["einchecktyp"] == "out") {
      table += "<tr class='warning'>";
      table += "<td><i class='fa fa-long-arrow-left fa-fw'></i></td>";
    }
    table += "<td>" + activitylist[i]["name"] + "</td>";
    table += "<td>" + activitylist[i]["timestamp"] + "</td>";
    table += "</tr>";
  }
  table += "</table>";
  document.getElementById("activity-body").innerHTML = table;
}


function addArticle() {
  var name = document.getElementById("articleName").value;
  var link = "http://martinshare.com/api/van.php/newgegenstand/" + name;

  if (name != "") {
    $.get(link, function( data ) {

    });
    document.getElementById("articleName").value = "";
  }

  setData();
}
