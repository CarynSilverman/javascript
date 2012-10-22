$(function(){
	
	var balance = 1000;

	var response = prompt('Do you want to make a (d)eposit, (w)ithdrawl or (q)uit?');
		
	/* this is the loop */
	while(response != 'q')
	{
			var amount = prompt('How much?'); /* this really can just be once but could also be afte the else statement */
			amount = parseInt(amount);

			if(response =='d')
			{
				balance = balance + amount;
				console.log('You just deposited $' + amount + '.00' and your balance + '.00');
			}
			else
			{
				balance = balance - amount;
				console.log('You just withdrew $' + amount + '.00' and your balance + '.00');
			}
		

		response = prompt('Do you want to make a (d)eposit, (w)ithdrawl or (q)uit?'); /* this prevents and infinate loop*/
	}

		console.log('Thank you for ATM-ing with us, your balance is : $' + balance + '.00'); /* the $ and .00 are to make it look better- extra*/

});