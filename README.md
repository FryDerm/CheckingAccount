# CheckingAccount
A repository for me to play around with Angular 4 and Microservice concepts.

## Running the application

`npm start`

## Ahead of Time Compiling (AOT)

https://angular.io/docs/ts/latest/cookbook/aot-compiler.html#

Run the following command:

`npm run build:aot`

Add this to the src/index.html file after the `</body>` tag.

`<script src="build.js"></script>`

Add this to the `<head>` section.

`<link rel="stylesheet" type="text/css" href="./app/app.component.min.css">`
