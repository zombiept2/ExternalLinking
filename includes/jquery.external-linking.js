(function($) {
    var methods = {
        init: function(options) {
            var defaults = {
                url: ''
            };
            var options = $.extend(defaults, options);

            obj = $(this);
			var regex = '';
			if (options.url == '')
			{
				regex = '/' + window.location.host + '/';
			}
			else
			{
				regex = '/' + options.url + '/';
			}
			$('a').each(function() {
			   var a = new RegExp(regex);
			   if(!a.test(this.href)) {
				   $(this).click(function(event) {
					   event.preventDefault();
					   event.stopPropagation();
					   window.open(this.href, '_blank');
				   });
			   }
			});
        }
    }

    $.fn.externalLinking = function(method) {

        // Method calling logic
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.externalLinking');
        }

    }
})(jQuery);
