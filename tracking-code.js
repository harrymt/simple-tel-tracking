
(function( jQuery ) {
 
    "use strict";

    // Telephone numbers
    jQuery("a[href^=tel]").each(function( index ) {
        var tel_number = jQuery(this).attr('href').replace('tel:', '').replace(';', '');
        stt_add_google_tracking_code(this, "Phone Call Tracking: " + tel_number);
    });

    // Mailto links
    jQuery("a[href^=mailto]").each(function( index ) {
        var email_address = jQuery(this).attr('href').replace('mailto:', '').replace(';', '');
        stt_add_google_tracking_code(this, "Mailto Tracking: " + email_address);
    });

    /**
     * Function to check if the [element] has an onclick handler,
     * if it does not! Then adds a google anayltics tracking code with
     * the tracking_string param as event.
     *
     * @param element         jquery element, e.g. <a href="tel" or <a href="mailto" 
     * @param tracking_string Event String
     */
    function stt_add_google_tracking_code(element, tracking_string) {
        if (jQuery( element ).attr('onclick') != undefined) {
            console.warn('Element already has something onclick, not setting Tracking code for the following element:');
            console.warn(element);
        }

        jQuery( element ).attr(
            'onclick',
            "ga('send', 'event','" + tracking_string + "','Click/Touch');"
        );
    }
 
})(jQuery);
