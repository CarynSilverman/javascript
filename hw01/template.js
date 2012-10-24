$(function(){
		var response = prompt('Would you like (a)nimals, (c)olors, (p)eople or (q)uit?');
		var animal = [];
		var color = [];
		var people = [];

		while(response != 'q')
	{
			if(response == 'a')
			{
				var count = prompt('How many?');
				count = parseInt(count);

					for(var i = 0; i < count; i++)
					{
						var anwser = prompt('you just typed in :' + i);

						animal.push(anwser);
					}
			}

			if(response == 'c')
			{
				var count = prompt('How many?');
				count = parseInt(count);

					for(var i = 0; i < count; i++)
					{
						var anwser = prompt('you just typed in :' + i);

						color.push(anwser);
					}
			}

			if(response == 'p')
			{
				var count = prompt('How many?');
				count = parseInt(count);

					for(var i = 0; i < count; i++)
					{
						var anwser = prompt('you just typed in :' + i);

						people.push(anwser);
					}
			}
	

		var response = prompt('Would you like (a)nimals, (c)olors, (p)eople or (q)uit?');

		
		if(response == 'q')
			console.log('this is your array' + animal);

		if(response == 'q')
			console.log('this is your array' + color);

		if(response == 'q')
			console.log('this is your array' + people);

	} //closes out section one 

		var select = prompt('Would you like to delete an [animal]? (y) or (n)');

		while(select != 'n')
		{
			if(select = 'a')
			var anwser = prompt('which one?');
			var index = animal.indexOf(anwser);
			animal.splice(index, 1);
		}

		var select = prompt('Would you like to delete a [color]? (y) or (n)');


		while(select != 'n')
		{
			if(select = 'c')
			var anwser = prompt('which one?');
			var index = color.indexOf(anwser);
			color.splice(index, 1);
		}

		var select = prompt('Would you like to delete a [people]? (y) or (n)');


		while(select != 'n')
		{
			if(select = 'p')
			var anwser = prompt('which one?');
			var index = people.indexOf(anwser);
			people.splice(index, 1);
		}


//end of section two 

	complete.log('here is your final list of' + animal + color + people);

});






