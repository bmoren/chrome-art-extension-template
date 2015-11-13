console.log("%c XXXARTXXX Plugin Loaded ", "color:pink; background:black; ");// just to see.

//wait for a message from the background.js file
chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) { 

	// console.log(msg.action);

	//if the message is enable, do things with jQuery and JS
	if(msg.action == 'enable'){
		//do things here when the plugin is enabled
		$('img').attr("src", "http://www.animatedimages.org/data/media/50/animated-flower-image-0008.gif")
	}else if(msg.action == 'disable'){
		//if the message is disable, reload the page so the user gets set back to normal....
		location.reload(); // reload the page.
	}

})// close the messageHandler