$(document).ready(function () {
    $('#fullpage').fullpage({
        //options here
        licenseKey: null,
		autoScrolling: true,
		scrollHorizontally: false
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});