# Getting Started Guide

If your npm version does not support npm aliasing, then this example provides an alternative way to install OpenLogic AngularJS using wget and a local path based npm installation. In this example, the packages are defined in the `PackagesList` section of the download.sh file.

### 1. Set environment variables

Before installing AngularJS dependencies, set the following environment variables: 

| Variable Name | Description |  
| ------------- | ----------- |
| **USER** | Username of your [OpenLogic AngularJS registry](https://angularjs.perforce.com/) |
| **PASSWORD** | Password of your [OpenLogic AngularJS registry](https://angularjs.perforce.com/) |
| **REGISTRY** | Path of your OpenLogic AngularJS registry - `https://angularjs.perforce.com` |
| **ANGULARJS_VERSION** | Your version of OpenLogic AngularJS. |
 

### 2. Install dependencies

Now run `npm install`. The `preinstall` npm hook mentioned in package.json will install OpenLogic AngularJS dependencies using `wget`. 

### 3. Build & run the application

```
npm run build
npm run serve
```

You can access this example at `localhost:8080` in your web browser.
