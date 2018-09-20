"Use strict"
console.log("Hello")


var Table= document.getElementById("Table");

function createTable(nRow,nColumn){
for(i=0; i<nRow; i++)
{
	var row = document.createElement("tr");
	Table.append(row);
	for(ii=0; ii<nColumn; ii++)
	{
		var data = document.createElement("td")
		var text = document.createTextNode("Anything")
		data.append(text);
		row.append(data);
	
	
	}
}
}
 createTable(5,4)