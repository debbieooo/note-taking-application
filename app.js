 
 
 var firebase= require('firebase');
 var start= require('./main');
 var prompt = require('prompt');

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDvZ3izJAYF2Vd3X_msh22Y2_iXAIP2Zlg",
    authDomain: "note-taking-application-cc330.firebaseapp.com",
    databaseURL: "https://note-taking-application-cc330.firebaseio.com",
    storageBucket: "note-taking-application-cc330.appspot.com",
    messagingSenderId: "90497827208"
  };
  firebase.initializeApp(config);


module.exports={




	createNote: function(){


  prompt.get(['username','content','title'], function(err,results){

    console.log("note created");

      var ref= firebase.database().ref().child('Notes');
      var messagesRef= ref.child(results.username);
      var message={content: results.content, title: results.title};
      var messageRef = messagesRef.push(message);

  });


  },


	viewNote: function(){

  	console.log("note viewed");

    prompt.get(['username','content','title'], function(err,results){

  
  });

	},


	deleteNote: function(){

  	console.log("note deleted");

    prompt.get(['username','content','title'], function(err,results){

  
  });

	},


	listNotes: function(){

  	console.log("note listed");

    prompt.get(['username','content','title'], function(err,results){

  
  });

	},


	searchNote: function(){

  	console.log("note searched");

    prompt.get(['username','content','title'], function(err,results){

  
  });

	}


}



