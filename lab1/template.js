$(function(){

	// this is a single line comment

	/* 
	* this is a multi line comment 
	*/

	// 
	
	var first = prompt('what is your first name?');
	var last = prompt('what is yoru last name?');
	var full = first + ' ' + last;

	var age = prompt('What is your age?');
	age = parseInt(age);

	console.log('your full name is ' + full);
	console.log('your real age is' + (age + 10));

	if(age < 18)
	{
		console.log('you are a minor');
	}
	else
	{
		console.log('you are an adult');
	}

	if((first == 'caryn') && (last != 'smith'))
		console.log('you are the winner');

	for(var i = 0; i < 10; i++)
	{
		console.log('you are on number : ' +i);
	}

	var response = prompt('Enter a color or (q)uit?');

	var colors = [];

	while(response != 'q')
	{
		colors.push(response);
		console.log('you just typed in :' + response);
		response = prompt('Enter a color or (q)uit?');

	}

	console.log(colors);

});





















