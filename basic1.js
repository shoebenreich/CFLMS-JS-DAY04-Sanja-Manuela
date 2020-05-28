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

	output.innerHTML = `Your first name is ${firstName}. <br> Your last name is ${lastName}. <br> You are ${age} years old.`;
	return false;
}
