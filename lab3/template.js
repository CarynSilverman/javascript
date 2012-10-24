$(function(){

	$('#b1').click(popup); //button action *click, function (popup
});

function popup ()
{
	//alert('button pressed!');  
	//programs function of the popup

	var t = $('#t1').val(); //t=text
	console.log('you typed in ' + t); //prints out on console


	var n = parseInt(t); //convert from a string to a number
	var z = cube(n); // takes info from function below to cube it. 
	$('#i2').text(z);


	if(z > 100) //if statement takes info and directs it. 
		$('#i2').css('color', 'red');
	else
		$('#i2').css('color', 'blue');

	for(var 1 = 0; i < z; i++) //NOTE ifs, fors, and whiles: dont need brackets wiht one item below
		console.log('counting :' + i); 

}

function cube(x)
{
	return x * x * x; 
}


