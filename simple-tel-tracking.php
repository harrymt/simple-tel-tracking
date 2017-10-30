<?php

/**
 * Simple plugin to add Google Analytics tracking code to all mailto and tel links on a page.
 *
 * @link              harrymt
 * @since             1.0.0
 * @package           Simple_Tel_Tracking
 *
 * @wordpress-plugin
 * Plugin Name:       Simple Tel Tracking
 * Plugin URI:        github.com/harrymt/simple-tel-tracking
 * Description:       Wordpress Plugin to add Google Analytics code to all tel links and mailto links.
 * Version:           1.0.0
 * Author:            Harry Mumford-Turner
 * Author URI:        github.com/harrymt
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       simple-tel-tracking
 * Domain Path:       /languages
 */

add_action( 'wp_loaded', 'stt_register_script' );

function stt_register_script() 
{
    wp_enqueue_script(
        'simple-tel-tracking-js',
        plugin_dir_url( __FILE__ ) . 'tracking-code.js',
        array( 'jquery' ), // Depends on jquery
        '1.0.0',
        true
    );
}
