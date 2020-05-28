function submitData() {
	firstName = document.forms['input']['firstname'].value;
	lastName = document.forms['input']['lastname'].value;
	age = document.forms['input']['age'].value;

	output = document.getElementById('wrapper2');

	if (firstName.length < 5) {
		output.style.color = 'green';
	} else {
		output.style.color = 'red';
	}


	prof = document.getElementById("prof").selectedIndex;

	job = document.getElementById("prof").value;

	switch(prof){
			case 0:
			output.style.backgroundColor = "purple";
			break;

			case 1:
			output.style.backgroundColor = "blue";
			break;

			case 2:
			output.style.backgroundColor = "grey";
			break;

			case 3:
			output.style.backgroundColor = "skyblue";
			break;

			default:
			output.style.backgroundColor = "white";
			break;		
	}





	output.innerHTML = `Your first name is ${firstName}. <br> Your last name is ${lastName}. 
	<br> You are ${age} years old and you work in the field of ${job}.`;
	return false;
}
