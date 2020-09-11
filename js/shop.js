	// Variables list goes here.

var i=1;
var inputname = "<td>" + "<input id=\"inputname"+i+"\"" + " type=\"text\" >" + "</td>";
var totalitem = "<td>" + "<input id=\"totalitem"+i+"\"" + " type=\"number\" >" + "</td>";
var itemprice = "<td>" + "<input id=\"itemprice"+i+"\"" + " type=\"number\" >" + "</td>";
var totalprice;
var temprow = "";
var addrow;
var inputrow;
var tempname;
var tempitem;
var tempprice;
//var grandtotal;

	// Some assigned value goes here.
	//var addrow = "";
addrow = "<tr>" + inputname + totalitem + itemprice + "</tr>";
document.getElementById("tr").innerHTML = addrow;

	// Main function when someone click on additem will execute here.

function additem(){
	//temparary value to print current id element goes here.
tempname = document.getElementById("inputname"+i).value;
tempitem = document.getElementById("totalitem"+i).value;
tempprice = document.getElementById("itemprice"+i).value;
tempitem = Number(tempitem);
tempprice = Number(tempprice);
totalprice = tempitem * tempprice;

	//temparary row is created here to print current and previous id element.
	
temprow = temprow +
 "<tr> <td>" + tempname + "</td>" +
 "<td id=\"totalitem"+i+"\"  >" + tempitem + "</td>" +
 "<td id=\"itemprice"+i+"\"  >" + tempprice + "</td>" +
 "<td id=\"totalprice"+i+"\" >" + totalprice + "</td> </tr>";
 
	// WARNING ID IS CHANGED HERE NEXT ROW VALUES ASSIGNED HERE ONWRARD.
	
i++;

	//New Empty Input Row Created here "WITH NEW ID".
	
inputname = "<td>" + "<input id=\"inputname"+i+"\"" + " type=\"text\" >" + "</td>";
totalitem = "<td>" + "<input id=\"totalitem"+i+"\"" + " type=\"number\" >" + "</td>";
itemprice = "<td>" + "<input id=\"itemprice"+i+"\"" + " type=\"number\" >" + "</td>";
inputrow = "<tr>" + inputname + totalitem + itemprice + "</tr>";

	// Here addrow will add previous all rows plus new empty input row.

addrow = temprow + inputrow;
document.getElementById("tr").innerHTML = addrow;
grandtotal();
function grandtotal(){
	//let temptotal = document.getElementById("totalprice"+i).innerHTML;
	//document.getElementById("grandtotalprice").innerHTML = temptotal;
	var j=1;
	var k = i-1;
	var temptotal=0;
	var ttp = 0;
	if(k==1){
	temptotal = document.getElementById("totalprice1").innerHTML;
	document.getElementById("grandtotalprice").innerHTML = temptotal;
	}
	else{
	while(k>=j)
	{
		ttp = document.getElementById("totalprice"+j).innerHTML;
		ttp = Number(ttp);
		temptotal = temptotal + ttp;
		j++;
	}
	document.getElementById("grandtotalprice").innerHTML = temptotal;
	}
	
}
	
}

	// function to find grandtotal of all totalitem and itemprice goes here.

