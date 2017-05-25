# CheckingAccount
A repository for me to play around with Angular 4 and Microservice concepts.

## Running the application

`npm start`

## Ahead of Time Compiling (AOT)

https://angular.io/docs/ts/latest/cookbook/aot-compiler.html#

Run the following commands:

`node_modules/.bin/ngc -p tsconfig-aot.json`

`node_modules/.bin/rollup -c rollup-config.js`

Add this to the src/index.html file after the `</body>` tag.

`script src="build.js"></script>`

## Webpack 
Webpack is an alternative bundling technology that will also allow me to use technologies such as LESS, SASS, etc...

https://angular.io/docs/ts/latest/guide/webpack.html

