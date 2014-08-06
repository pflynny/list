(function() {
		
	var Site = {
		init: function() {
			console.log('let\'s do this');			
		},
		start: function() {
			document.addEventListener("DOMContentLoaded", this, false);
		},
		handleEvent: function(e) {
			switch(e.type) {
				case "DOMContentLoaded":
					this.init();
					break;
			}
		}
	};
 
	if (document.readyState !== "complete") {
		Site.start();	
	} else {
		Site.init();
	}
	
})();
