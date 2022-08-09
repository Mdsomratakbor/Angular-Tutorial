`An angular application can be compiled by using the following two commands in Angular CLI.`
- **1.ng-serve**
- **2.ng-build**

**Similarities:**

- 1. `Both the commands compile the application and produce development build by default. In development build, compiled files doesn’t have any optimization done by Angular.`
- 2. `Both do bundling of all the files present in the application. Bundling is the process of combining all the files to the single file. It is one of the optimization process done by Angular. In this process it produces 5 types of bundled JavaScript files along with their source map files by default. These files will be embedded in index.html file which is loaded by the browser.`
- 3. `Both produces development build by default.`
**Five files are created after executing the command: **

- **1) inline.bundle.js — Contains the scripts which are necessary for WebPack to run.**
- **2) polyfills.bundle.js — Contains the scripts in order to make the application compatible to different browsers.**
- **3) main.bundle.js — Contains code present in all the files of application.**
- **4) styles.bundle.js — Contains styles used by the application.**
- **5) vendor.bundle.js — Contains all Angular + 3rd party libraries in it.**

![image](https://user-images.githubusercontent.com/53125546/183726994-3419c597-d4e5-430c-bc61-0799a93917a2.png)
![image](https://user-images.githubusercontent.com/53125546/183727064-c62a8d95-64cc-4260-8f90-cd8ea0b6ab82.png)

**Differences:**

1. **ng-serve:** `Compiles and runs the application from the memory and as a result it is only used during the development process. It doesn’t write the build files to any folder. Hence this process cannot be used to deploy in another server.`
2. **ng-build:** `Compiles the application and produces the build files to an external folder. The name of the output folder is decided by the value of outputPath property present in the ‘build’ section in ‘angular.json’ file. As a result this output folder generated at the end can be used to deploy in any external server.`
