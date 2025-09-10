fetch('https://api.animechan.io/v1/quotes/random')
    .then(response => response.json())
    .then(quote => console.log(quote))

    
let obj = {
	    status: 'success',
	    data: {
		    content: 'The final door is about to open! And I am the one opening it! Then the world that we know of will come to an end! This world of insatiable desires will end!',
		    anime: {
			    id: 575,
			    name: 'Mobile Suit Gundam SEED',
			    altName: 'Kidou Senshi Gundam SEED'
		    },
		    character: {
			    id: 1486,
			    name: 'Rau Le Creuset'
		    }
        }
    }

