`An angular application can be compiled by using the following two commands in Angular CLI.`
- **1.ng-serve**
- **2.ng-build**

**Similarities:**

- 1. `Both the commands compile the application and produce development build by default. In development build, compiled files doesn’t have any optimization done by Angular.`
- 2. `Both do bundling of all the files present in the application. Bundling is the process of combining all the files to the single file. It is one of the optimization process done by Angular. In this process it produces 5 types of bundled JavaScript files along with their source map files by default. These files will be embedded in index.html file which is loaded by the browser.`

**Five files are created after executing the command: **

- **1) inline.bundle.js — Contains the scripts which are necessary for WebPack to run.**
- **2) polyfills.bundle.js — Contains the scripts in order to make the application compatible to different browsers.**
- **3) main.bundle.js — Contains code present in all the files of application.**
- **4) styles.bundle.js — Contains styles used by the application.**
- **5) vendor.bundle.js — Contains all Angular + 3rd party libraries in it.**

https://miro.medium.com/max/1270/1*x11WYxF-c4wxJTVX7L_Pdg.png
