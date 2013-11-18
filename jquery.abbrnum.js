/**
 * Abbrnum is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy numbers (e.g. "12345" or "9865468.123") to
 * abbreviation number (e.g. "12k" or "9.9m")
 *
 * @name abbrNum
 * @requires jQuery (any version)
 * @author Chirag
 *
 * Copyright (c) 2013, Chirag (blikenoother -[at]- gmail [dot] com)
 */

(function($) {
    $.fn.abbrNum = function(options) {
    	
		var defaultVal = {
			decPlaces: 0
		};
		var options = $.extend(defaultVal, options);
            
    	var convert = function(number, decPlaces){
        	decPlaces = Math.pow(10,decPlaces);

			// Enumerate number abbreviations
			var abbrev = [ "k", "m", "b", "t" ];

		    // Go through the array backwards, so we do the largest first
		    for (var i=abbrev.length-1; i>=0; i--) {

		        // Convert array index to "1000", "1000000", etc
		        var size = Math.pow(10,(i+1)*3);

		        // If the number is bigger or equal do the abbreviation
		        if(size <= number) {
		             // Here, we multiply by decPlaces, round, and then divide by decPlaces.
		             // This gives us nice rounding to a particular decimal place.
		             number = Math.round(number*decPlaces/size)/decPlaces;

		             // Handle special case where we round up to the next abbreviation
		             if((number == 1000) && (i < abbrev.length - 1)) {
		                 number = 1;
		                 i++;
		             }

		             // Add the letter for the abbreviation
		             number += abbrev[i];

		             // We are done... stop
		             break;
   				}
			}

			return number;
        }

        this.each(function() {
        	var element = $(this).prop('tagName').toLowerCase();
        	var decPlaces =  options.decPlaces;
        	if($(this).attr('decplaces')){
        		decPlaces = $(this).attr('decplaces');
        	}
        	
        	if(element=='div' || element=='span'){ 
        		var number = $(this).html();
        		number = convert(number, decPlaces);
        		$(this).html(number);
        	} else if(element=='label'){
        		var number = $(this).text();
        		number = convert(number, decPlaces);
        		$(this).text(number);
        	} else if(element=='input'){
        		var number = $(this).val();
        		number = convert(number, decPlaces);
        		$(this).val(number);
        	} 
        });
    }
}(jQuery));