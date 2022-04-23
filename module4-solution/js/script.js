(function(){

	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	
	var hellospeaker= {};
	hellospeaker.speakword = "Hello";
	hellospeaker.speak=	function(name) {
  console.log(hellospeaker.speakword + " " + name);
}
	
	
	var byespeaker={};
	byespeaker.speakword = "Good Bye";
	byespeaker.speak= 	function(name) {
  console.log(byespeaker.speakword + " " + name);
}
	


	
	for (var i = 0; i < names.length; i++) {


		var firstLetter = names[i].charAt(0).toLowerCase();
				  if (firstLetter === 'j'){
   console.log(hellospeaker.speak(names[i]));
  } else {
    console.log(byespeaker.speak(names[i]));
  }

  
}


	
})();

