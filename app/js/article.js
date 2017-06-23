// returns userlist
function getArticleliste() {
  $.get( "http://martinshare.com/api/van.php/warenliste", function( data ) {
    warenliste = JSON.parse(data);
    //return object
    setData(warenliste);
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
    row.className = "articleRow";

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    // Add some text to the new cells:
    cell1.innerHTML = warenliste[i]["id"];
    cell2.innerHTML = warenliste[i]["name"];

  }


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
