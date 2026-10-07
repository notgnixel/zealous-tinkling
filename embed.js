let form = document.forms["my-form"];
form.addEventListener("submit", getValues);

function getValues(event){
	event.preventDefault();

	let formData = {
		"Question 1" : this.question1.value,
		"Question 2" : this.question2.value,
		"Question 3" : this.question3.value,
		"Question 4" : this.question4.value,
		"Question 5" : this.question5.value,
		"Question 6" : this.question6.value,
		"Question 7" : this.email.value
	}

	let out = '<p>Question 1: <span> ${formData.question1} </span></p><p>Question 2: <span>${formData.question2}</span></p><p>Question 3: <span>${formData.question3}</span></p><p>Question 4: <span>${formData.question4}</span></p><p>Question 5: <span>${formData.question5}</span></p><p>Question 6: <span>${formData.question6}</span></p><p>Question 7: <span>${formData.email}</span></p>';

	document.querySelector(".out code").innerHTML = out;
}