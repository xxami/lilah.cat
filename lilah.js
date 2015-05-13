
/**
 * lilah.cat content injection
 */

$(document).ready(function() {

	$('#content_next').click(function() {
		$.ajax({
			url: 'get_content.php',
			dataType: 'json',
			timeout: 7000,
		}).success(function(data) {
			if (typeof(data['status']) == 'undefined') {
				/**
				 * handle connection fail
				 */
				return;
			}
			/**
			 * update content
			 */
		}).error(function(data) {
			/**
			 * handle connection fail
			 */
		});
	});

});

