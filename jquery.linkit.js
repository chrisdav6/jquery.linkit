/*
* name: LinkIt
* author: Chris Davis
* version: 0.1.0
* license: MIT
*/


(function($) {
	$.fn.linkit = function(options) {
		//Default Settings
		var settings = $.extend({
			href : null,
			text : null,
			target : "_self"
		}, options);

		//Validation
		if(settings.href == null) {
			console.log("Please enter href option");
			return this;
		}

		return this.each(function() {
			var object = $(this);

			if(settings.text == null) {
				settings.text = object.text();
			}
			object.wrap("<a target='" + settings.target + "' href='" + settings.href + "'></a>").text(settings.text);
		});
	}
}(jQuery));