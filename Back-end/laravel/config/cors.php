<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    // 'paths' => ['*'],

    // 'allowed_methods' => ['*'],

    // 'allowed_origins' => [env('FRONTEND_URL', 'http://localhost:3000')],

    // 'allowed_origins_patterns' => [],

    // 'allowed_headers' => ['*'],

    // 'exposed_headers' => [],

    // 'max_age' => 0,

    // 'supports_credentials' => true,
    'paths' => ['api/*', 'sanctum/csrf-cookie', 'login', 'logout', 'register'],
'allowed_methods' => ['*'],
'allowed_origins' => ['https://didactic-yodel-xjrw49pjgw9f96x7-3000.app.github.dev'],
'allowed_origins_patterns' => [],
'allowed_headers' => ['*'],
'supports_credentials' => true,

];
