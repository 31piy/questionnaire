# questionnaire
A small angular app for questionnaire using AngularJS, webpack, gulp, NPM.

# Development Setup
Ensure that you have the following tools already installed on your system

```
NodeJS (>= 8.12.0)
NPM
Git
```

1. Checkout the code on your system
    ```bash
    git checkout https://github.com/31piy/questionnaire.git
    ```
1. Install dependencies
   ```bash
   npm install
   ```
1. Run the local development server
   ```bash
   npm run serve
   ```

The above commands should start a local development server, which may be accessed at http://localhost:3000.

# HMR Support
The local development server supports HMR (Hot Module Replacement). It automatically deploys the changed code and refreshes the browser during development.

# Production build
To create and run a production build, run these commands
```
npm run build
node server.js
```

This creates the production ready bundle under `dist` folder and starts a NodeJS server which serves the `dist` folder.
