const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
//Mix compile and minify your application's CSS and JavaScript files.
mix.js('resources/js/app.js', 'public/js')
    .react() // change the Laravel Mix configuration and tell Laravel Mix to install the babel-preset-react plugin required for compiling React components. 
    .postCss('resources/css/app.css','css','public/css', [
        //
    ]);
