// this handles the background stuff which interfaces with the extension button.

var bool = false; //set the boolean to false to begin.

//look for a click of the button
chrome.browserAction.onClicked.addListener(function(){

	bool = !bool; //toggle between true/false of the boolean
	// console.log(bool);
	
	//if the boolean is true, turn on the plugin...
	if(bool == true){
		//send the message to the client that the plugin should be enabled.
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		    chrome.tabs.sendMessage(tabs[0].id, {action: "enable"}, function(response) {});  
		});
		chrome.browserAction.setIcon({path:"enable.png"}); //change the icon so they know the plugin is enabled

	}else{
		//the boolean is false, turn the plugin off.
		//send the message
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		    chrome.tabs.sendMessage(tabs[0].id, {action: "disable"}, function(response) {});  
		});		
		chrome.browserAction.setIcon({path:"disable.png"}); //change the icon so they know the plugin is disabled

	}

}); //close the clickHandler




