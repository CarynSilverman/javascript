$(function(){
	//sets up to change text to a integer 
	/* total = balance_checking + balance_saving; */

	var balance_checking = $('#cash-checking').text();
	balance_checking = parseInt(balance_checking);

	var balance_saving = $('#cash-saving').text();
	balance_saving = parseInt(balance_saving);

	//sets up buttons
	$('#deposit-checking').click(dep);
	$('#withdrawl-checking').click(wd);

	$('#deposit-saving').click(depsavings);
	$('#withdrawl-saving').click(wdsavings);



	//function to add deposit of checking
	function dep()
	{
		var amount = $('#amount-checking').val();
		amount = parseInt(amount);

		balance_checking = balance_checking + amount;
		balance_checking = parseInt(balance_checking);		

		$('#cash-checking').text(balance_checking);
		}	


	function wd()
	{
		amount = $('#amount-checking').val();
		amount = parseInt(amount);

		balance_saving = $('#cash-checking').text();
		balance_saving = parseInt(balance_saving);

/* 1 do i have enough in checking */
		if(amount <= balance_checking)
		{
			balance_checking = balance_checking - amount;
		}
/* 2 do i have enough money checking + savings  */

		else if(amount <= (balance_checking + balance_saving))
		{
			
			/* balance_saving = balance_saving-(amount-balance_checking); */

			balance_saving = (balance_checking + balance_saving) - amount

			balance_checking = 0;
		}

			$('#cash-checking').text(balance_checking);
			$('#cash-savings').text(balance_savings);

	}

			// starts savings ______________________________
	function depsavings()
	{
		var amount = $('#amount-saving').val();
		amount = parseInt(amount);

		balance_saving = balance_saving + amount;
		balance_saving = parseInt(balance_saving);	

		$('#cash-saving').text(balance_saving);	
	}

	function wdsavings()
	{
		amount = $('#amount-saving').val();
		amount = parseInt(amount);

		balance_saving = $('#cash-saving').text();
		balance_saving = parseInt(balance_saving);

		if(amount <= balance_saving)
		{
			balance_saving = balance_saving-amount;
		}
		$('#cash-saving').text(balance_saving);
		
	}
});











