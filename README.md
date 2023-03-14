# OpenLogic AngularJS Code Samples
This repository contains related code samples as a reference for customers using the OpenLogic AngularJS LTS offering.

The following examples are included:

| Sample | Description |
| ------ | ----------- |
| [npm-install-scoped-ts](./examples/npm-install-scoped-ts/README.md) | How to install OpenLogic AngularJS packages for TypeScript |
| [npm-install-scoped-js](./examples/npm-install-scoped-js/README.md) | How to install OpenLogic AngularJS packages for JavaScript |
| [npm-file-install-wget](./examples/npm-file-install-wget/README.md) | How to install OpenLogic AngularJS packages using wget and a zip file if your npm version doesn't support npm alias |
| [npm-file-install-wget-bundle](./examples/npm-file-install-wget-bundle/README.md) | How to install OpenLogic AngularJS bundled package using wget and a zip file if your npm version doesn't support npm alias

### Configure private access

Perform these important steps before trying any example in this repository:

1. Log in with npm on the command line. Provide your Perforce registry credentials when prompted:
```bash
npm login --registry=https://angularjs.perforce.com/repository/perforce-angularjs-angular/ --scope=@perforce-angularjs
```
2. Execute `cat ~/.npmrc` in the terminal. Verify that you see this output:
```
//angularjs.perforce.com/repository/perforce-angularjs-angular/:_authToken=NpmToken.<TOKEN>
@perforce-angularjs:registry=https://angularjs.perforce.com/repository/perforce-angularjs-angular/
```

### OpenLogic AngularJS versions

The following AngularJS versions are supported by Perforce.

| Versions |
| ------ |
| 1.6.10 |
| 1.6.11 |
| 1.6.12 |
| 1.8.3  |
| 1.8.4  |
| 1.8.5  |

### Useful References

1) [OpenLogic AngularJS Installation Guide 2.0](https://angularjs.perforce.com/repository/perforce-angularjs-documentation/documentation/Perforce%20AngularJS%20Installation%20Guide%202.0.pdf) 
2) [OpenLogic AngularJS User Guide 2.4](https://angularjs.perforce.com/repository/perforce-angularjs-documentation/documentation/OpenLogic%20AngularJS%20User%20Guide%202.4.pdf)
