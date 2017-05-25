# CheckingAccount
A repository for me to play around with Angular 4 and Microservice concepts.

## AOT Compiling

Run the following commands:

`node_modules/.bin/ngc -p tsconfig-aot.json`

`node_modules/.bin/rollup -c rollup-config.js`

Add this after the `</body>` tag.

`script src="build.js"></script>`
