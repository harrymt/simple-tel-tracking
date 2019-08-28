# Simple Tel Tracking

Wordpress Plugin to add Google Analytics code to all tel links and mailto links.

Requires Google Analytics tracking code to be already on the page, e.g. [use a plugin to add the tracking code](https://en-gb.wordpress.org/plugins/ga-google-analytics/)

- I wrote a [blog post about this](https://www.harrymt.com/blog/2017/11/10/add-google-analytics-code-to-tel-links-wordpress.html).

Download it on Wordpress by searching for ['simple-tel-tracking'](https://wordpress.org/plugins/simple-tel-tracking) or [download it here](https://downloads.wordpress.org/plugin/simple-tel-tracking.zip).


- Simple
- Uses jQuery
- Adds the following [JavaScript](tracking-code.js) to pages:

```javascript
// tracking-code.js

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
        "ga('send', 'event','" + tracking_string + "','Click/Touch']);"
    );
}


jQuery("a[href^=tel]").each(function( index ) {
    var tel_number = jQuery(this).attr('href').replace('tel:', '').replace(';', '');

    stt_add_google_tracking_code(this, "Phone Call Tracking: " + tel_number);
});


jQuery("a[href^=mailto]").each(function( index ) {
    var email_address = jQuery(this).attr('href').replace('mailto:', '').replace(';', '');
    stt_add_google_tracking_code(this, "Mailto Tracking: " + email_address);
});

```
