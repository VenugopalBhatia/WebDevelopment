

var div = document.getElementById('testEle')

var txtinpt = document.getElementsByName('abc')[0];

div.addEventListener("mouseover",function(){
	console.log("mouse over");
	div.style.backgroundColor = 'blue';
})

div.addEventListener("mouseout",function(){
	console.log("mouse out");
	div.style.backgroundColor = 'red';
})





txtinpt.addEventListener("keypress",function(event){
	console.log("key ",event.keyCode);
})

