
window.onload=function()
{
	let bus=[];
	if(localStorage.getItem("bus")==null)
	{
		let strbus=JSON.stringify(bus);
		console.log(strbus);
		localStorage.setItem("bus",strbus);
	}
	
}
function display(temp=undefined)
{
	let info="";
	let buses;
	if(temp==undefined)
	{
	buses=JSON.parse(localStorage.getItem("bus"));	
	}
	else
	{
		buses=temp;
	}
	buses.forEach(function(ele,index){
		let tdata=`<tr>
						<td>${index+1}</td>
						<td>${ele.name}</td>
						<td>${ele.source}</td>
						<td>${ele.destination}</td>
						<td>${ele.number}</td>
						<td>${ele.passenger_capacity}</td>
						<td><button onclick="dlt_bus(${(index)})">delete</button></td>
					</tr>`;
					info=info+tdata;
	});
	document.getElementsByClassName("data")[0].innerHTML=info;
}
display();
function addbus(event)
{	
	event.preventDefault();
	let ab={};
	
	let name=document.getElementById('name').value;
	let source=document.getElementById('source').value;
	let destination=document.getElementById('dest').value;
	let num=document.getElementById('num').value;
	let pc=document.getElementById('pc').value;
	
	ab.name=name;
	ab.source=source;
	ab.destination=destination;
	ab.number=Number(num);
	ab.passenger_capacity=Number(pc);
	
	//bus.push(ab);
	
	let buses=JSON.parse(localStorage.getItem("bus"));
	buses.push(ab);
	//let strbuses=JSON.stringify(buses);
	
	//console.log(bus);
	//console.log(strbus);
	//localStorage.setItem("buses",strbus);
	localStorage.setItem("bus",JSON.stringify(buses));
	
	let abus=JSON.parse(localStorage.getItem("bus"));
	display(abus);
	//console.log(bus);
	
	document.getElementById('name').value="";
	document.getElementById('source').value="";
	document.getElementById('dest').value="";
	document.getElementById('num').value="";
	document.getElementById('pc').value="";
}

function s_search()
{	
	let s_bus=JSON.parse(localStorage.getItem("bus"));
	let sv=document.getElementById('s_search').value;
	let newdata=s_bus.filter(function(ele){
		return ele.source.toLowerCase().indexOf(sv.toLowerCase())!=-1;	
	});
	display(newdata);
}
function d_search()
{	let d_bus=JSON.parse(localStorage.getItem("bus"));
	let sv=document.getElementById("d_search").value;
	let newdata=d_bus.filter(function(superhero){
		return (superhero.destination.toUpperCase().indexOf(sv.toUpperCase())!=-1);
	});
	display(newdata);
}
function dlt_bus(index){
	let dlt_bus=JSON.parse(localStorage.getItem("bus"));
	dlt_bus.splice(index,1);
	display(dlt_bus);
	localStorage.setItem("bus",JSON.stringify(dlt_bus));
}