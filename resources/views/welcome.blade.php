<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Carevia — Healthcare Management Platform terintegrasi untuk digitalisasi rumah sakit dan fasilitas pelayanan kesehatan.">

        <title>Carevia — Healthcare Management Platform</title>

        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%230284c7'/><path d='M16 8V24M8 16H24' stroke='white' stroke-width='3.2' stroke-linecap='round'/><circle cx='16' cy='16' r='3' fill='white'/></svg>">

        @fonts

        <!-- Styles / Scripts -->
        @vite(['resources/css/app.css', 'resources/js/app.tsx'])
    </head>
    <body class="bg-slate-50 text-slate-900 font-sans antialiased selection:bg-sky-500 selection:text-white">
        <div id="root"></div>
    </body>
</html>
