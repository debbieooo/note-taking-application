 
 
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

    console.log("Please enter your username ");
        prompt.get(['username'], function(err,results){
          
          var ref= firebase.database().ref().child('Notes');
          var messagesRef= ref.child(results.username);

          //messagesRef.child(messageRef.key).set(message);
          messagesRef.orderByKey().once('value',function(snap){
          //console.log('added', snap.val());
          var notes = snap.val();
            
            for(var noteKey in notes){

              console.log("Title:"+ JSON.stringify(notes[noteKey].title));

            }

        prompt.get(['title'],function(err,results){

          //console.log(messagesRef);
          //console.log(snap.val());

          messagesRef.orderByChild("title").equalTo(results.title).once("value", function(snap){

          //console.log(messagesRef);
          //console.log(snap.key);
          //console.log(snap.val());

            for(var noteKey in snap.val()){

              console.log("Content: "+JSON.stringify(notes[noteKey].content));

            }


          });

        });
    
        });

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



