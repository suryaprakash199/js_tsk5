function myfunc() {
	var a = document.getElementById('given_value').value;
	var b = document.getElementById('confirm_value').value;
	var c ="";
	if (a == b) {
		c = "The password is correct";
		location.replace('https://www.w3schools.com/howto/howto_css_signup_form.asp')
	}
	else 
	{
		c ="The password is incorrect";
	}
	document.getElementById('result').innerHTML = c;
}