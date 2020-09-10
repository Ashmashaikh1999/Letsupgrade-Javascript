let details=[
				{ 
					name:"Ashma", age:20, country:"India", hobbies:["Table-Tennis", "Badminton","Cooking","Coding"]
				},
				{
					name:"Mariya", age:17, country:"England", hobbies:["Cooking", "Designing","Badminton", "Teaching"]
				},
				{
					name:"XYZ", age: 35, country:"Canada", hobbies:["Watching Movies", "Singing", "Dancing"]
				}
			];
function Display()
{	
	console.log("All the objects");
	details.forEach(function (det)
	{
		console.log(det);
	});
}
Display();

function Age()
{	
	console.log("Objects in which age<30");
	details.forEach(function(ele)
	{
		if(ele.age < 30)
		{
			console.log(ele);
		}	
	});
}
Age();

function Country()
{	
	console.log("Displaying objects in which country is India");	
	details.forEach(function (ele)
	{	if(ele.country=="India")
		{
			console.log(ele);
		}
	});
}
Country();

