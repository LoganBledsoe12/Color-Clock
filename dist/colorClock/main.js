function changeTime(){
	var myBox = document.getElementById('abox');
	myBox.innerHTML ='apple';
	var time = new Date();
	var getMinutes=time.getMinutes();
	var getHours=time.getHours();
	var getSeconds=time.getSeconds();
	myBox.innerHTML= getHours+':'+getMinutes+':'+getSeconds;
}
setInterval(changeTime, 1000)

function changeColor(){
	var myBox = document.getElementById('abox');
	var time = new Date();
	var getSeconds=time.getSeconds();

if (getSeconds<=5){
	myBox.style.backgroundColor = "red";
}
else if(getSeconds<=10){
	myBox.style.backgroundColor = "orange";
}
else if(getSeconds<=15){
	myBox.style.backgroundColor = "green";
}
else if(getSeconds<=20){
	myBox.style.backgroundColor = "blue";
}
else if(getSeconds<=25){
	myBox.style.backgroundColor = "silver"
}
else if(getSeconds<=30){
	myBox.style.backgroundColor = "cyan";
}
else if(getSeconds<=35){
	myBox.style.backgroundColor = "crimson";
}
else if(getSeconds<=40){
	myBox.style.backgroundColor = "darkgoldenrod";
}
else if(getSeconds<=45){
	myBox.style.backgroundColor = "fuchsia";
}
else if(getSeconds<=50){
	myBox.style.backgroundColor = "indigo";
}
else if(getSeconds<=55){
	myBox.style.backgroundColor = "lawngreen";
}
else if(getSeconds<=60){
	myBox.style.backgroundColor = "palegreen";
}
}
setInterval(changeColor, 2000)