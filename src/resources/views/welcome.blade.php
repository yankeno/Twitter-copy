<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" type="image/x-icon"  href="{{ asset('/favicon.ico') }}">
        <title>Twitter-copy</title>
        @viteReactRefresh
        @vite('resources/ts/app.tsx')
    </head>
    <body class="antialiased" style="overscroll-behavior: none">
        <div id="app"></div>
    </body>
</html>
