# Debugging

The console refered to below, is your browser console.

## Use the Console

Use the console statement and review error messages. Often it will show you the specific file you should be looking in to find the issue.

## Source

Inside the console, you will find the main.bundle.js which is EVERYTHING compiled. You can provide breakpoints, this will jump to the typescript file. This is the use of the source maps, which will cross reference the ts files.

The more direct approach is to go into `webpack/./src/app/...` find the file you want to debug in the console.
