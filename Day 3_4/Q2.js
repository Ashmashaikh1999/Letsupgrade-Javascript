function CopyContent()
	{
		const I1=document.getElementById("i1");
		let text=I1.innerText[0];
		console.log(I1);
		console.log(text);
		const I2=document.getElementById("i2");
		I2.value=I1.value;
	}
