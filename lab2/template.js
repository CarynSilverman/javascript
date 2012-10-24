$(function(){


	var z = prompt('enter a number?');
	z = parseInt(z); /* turs z into a number */
	var y = square(z); /*  this pass the input of z into the x of function square (x) then that function executs*/

	console.log('the square of ' + z + 'is' + y);

	/* volume */
	var a = volume( 3, 5, 7)
	var b = volume( 2, 9, 8)
	var c = volume( 1, 8, 2)

	console.log('the volume of a is : ' + a);
	console.log('the volume of a is : ' + b);
	console.log('the volume of a is : ' + c);


});



function square(x) /* x is a variable and it is a number that live in the function*/
{
	var s = x * x /* */ 
	return s; /* get returned back to be put into var y */
}



/* volume. this defines but need the calling from about with the vars and console.logs*/

function volume(l, w, h)
{
	return l * w * h;
}