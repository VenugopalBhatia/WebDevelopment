

function sayHello(){
	alert("Hello");
}




function sayBye(){
	alert("Bye");
}


var button2 = document.getElementById("btn2");

button2.addEventListener("click",sayHello);

button2.addEventListener("click",sayBye);