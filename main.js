var prompt = require('prompt');
var app= require('./app.js');
 
  // 
  // Start the prompt 
  // 
  function start(){

  	console.log("Please enter your name");


  prompt.start();
 
 
    console.log("Choose from the options below\n1: Create Note \n2: View Note \n3:Delete Note \n4 list notes \n5: Search Notes");
	prompt.get(['number'],function(err,result){

		//console.log(result.number);
		switch(result.number){


			case "1":

				app.createNote(result.username);
				break;

			case "2":

				app.viewNote();
				break;

			case "3":

				app.deleteNote();
				break;


			case "4":
				app.listNotes();
				break;

			case "5":
				app.searchNotes();
				break;


		}
	
	});


  //});

  }
  

  start();

  module.exports.start=start;


  

