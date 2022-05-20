;(function( window, document ) {
	window.WAYSTATION = window.WAYSTATION || {};

	WAYSTATION.init = function() {

		// Initialize Utility and Common functions
		WAYSTATION.util.init();
		WAYSTATION.common.init();

		// Add "data-page" to body tag to trigger page-specific function
		var page = document.body.getAttribute( "data-page" );

		if (WAYSTATION[page] && typeof WAYSTATION[page]["init"] === "function") {
			WAYSTATION[page]["init"]();
		}
	};

	/*
	 * Utility/Helper
	 */
	WAYSTATION.util = {
		init: function() {
			var _this = this;
		}
	};

	/*
	 * Common/Site-Wide
	 */
	WAYSTATION.common = {
		init: function() {
			var _this = this;

			$('#contact-form').submit(function(ev) {
			    // Prevent the form from actually submitting
			    ev.preventDefault();

			    // Get the post data
			    var data = $(this).serialize();

			    // Send it to the server
			    $.post('/', data, function(response) {
			        if (response.success) {
			        	$('#errors').removeClass('show');
			            $('#thanks').addClass('show');
			        } else {
			            // response.error will be an object containing any validation errors that occurred, indexed by field name
			            // e.g. response.error.fromName => ['From Name is required']
			            $('#thanks').removeClass('show');
			            $('#errors').addClass('show');
			        }
			    });
			});
		}
	};

	/*
	 * Page-Specific
	 */
	WAYSTATION.home = {
		init: function() {
			var _this = this;
		}
	};

	WAYSTATION.init();
})( window, document );