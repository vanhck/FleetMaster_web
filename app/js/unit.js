// returns userlist
function getUnitliste() {
  $.get( "http://martinshare.com/api/van.php/lagerliste", function( data ) {
    lagerliste = JSON.parse(data);
    //return object
    setData(lagerliste);
  });
}


function setData(lagerliste) {
  var table = document.getElementById("unittable");


  if (document.getElementsByClassName("unitRow") != null) {
    console.log("tried");
    $('.unitRow').remove();
  }


  for (var i = 0; i < lagerliste.length; i++) {

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(1);
    row.className = "unitRow";

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    // Add some text to the new cells:
    cell1.innerHTML = lagerliste[i]["id"];
    cell2.innerHTML = lagerliste[i]["name"];
    cell3.innerHTML = lagerliste[i]["lon"];
    cell4.innerHTML = lagerliste[i]["lat"];
    cell5.innerHTML = lagerliste[i]["typ"];

  }

}

function addUnit() {
  var name = document.getElementById("unitName").value;
  var lon = document.getElementById("unitLon").value;
  var lat = document.getElementById("unitLat").value;
  var type = document.getElementById("unitTyp").value;
  var link = "http://martinshare.com/api/van.php/newvan/" + name + "/" + lon + "/" + lat + "/" + type;

  if (name != "" && lon != "" && lat != "" && type != "") {
    $.get(link, function( data ) {

    });
    document.getElementById("unitName").value = "";
    document.getElementById("unitLon").value = "";
    document.getElementById("unitLat").value = "";
    document.getElementById("unitTyp").value = "";
  }

  setData();

}
