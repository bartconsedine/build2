///coments
function test(){
	console.log("it's working");
}

function build(string){
	var node = document.createElement("h1");                 // Create a <li> node
	var textnode = document.createTextNode(string);         // Create a text node
	node.appendChild(textnode);                              // Append the text to <li>
	document.querySelector("body").appendChild(node);     // Append <li> to <ul> with id="myList"
}