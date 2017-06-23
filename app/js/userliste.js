// returns userlist
function getUserliste() {
  $.get( "http://martinshare.com/api/van.php/userliste", function( data ) {
    userliste = JSON.parse(data);
    //return object
    setData(userliste);
  });
}


function setData(userliste) {
  var table = document.getElementById("usertable");


  if (document.getElementsByClassName("userRow") != null) {
    console.log("tried");
    //var rows = document.getElementsByClassName("userRow");
    $('.userRow').remove();
    /*
    for (var i = 0; i < rows.length; i++) {

    }
    */
  }


  for (var i = 0; i < userliste.length; i++) {

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(1);
    row.className = "userRow";

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    // Add some text to the new cells:
    cell1.innerHTML = userliste[i]["name"];
    cell2.innerHTML = userliste[i]["skill"];

  }

}
