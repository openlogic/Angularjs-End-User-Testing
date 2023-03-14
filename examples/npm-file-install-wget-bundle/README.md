# Getting Started Guide

If your npm version does not support npm aliasing, then this example provides an alternative way to install Perforce AngularJS using wget and local path based npm installation. This demo explains how to install the bundled AngularJS.

## What is the OpenLogic AngularJS bundle?

 The `@perforce-angular/angularjs` package is a big bundle which includes everything in a single package, which means, you don't need to explicitly install libraries like `angular-aria`, `angular-animate`, `angular-cookies` etc. They are by default included in the `@perforce-angular/angularjs` package.

### 1. Set environment variables

Before installing AngularJS dependencies, set the following environment variables: 

| Variable Name | Description |  
| ------------- | ----------- |
| **USER** | Username of your [OpenLogic AngularJS registry](https://angularjs.perforce.com/) |
| **PASSWORD** | Password of your [OpenLogic AngularJS registry](https://angularjs.perforce.com/) |
| **REGISTRY** | Path of your OpenLogic AngularJS registry - `https://angularjs.perforce.com` |
| **ANGULARJS_VERSION** | Your version of OpenLogic AngularJS |
 

### 2. Install dependencies

Now run `npm install`. The `preinstall` npm hook mentioned in package.json will install OpenLogic AngularJS dependencies using `wget`. 

### 3. Build & run application
```
npm run build
npm run serve
```

You can access this example at `localhost:8080` in your web browser.
