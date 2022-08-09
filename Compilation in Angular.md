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

![image](https://user-images.githubusercontent.com/53125546/183727538-db6e7b9b-83d8-48d1-9e57-a27b90bc255a.png)

**In Angular, we have 2 modes of compilation:**

-  1. `JIT (Just In Time) Compilation`
-  2. `AOT (Ahead of Time) Compilation`

`Until Angular 8, JIT compilation is the default compilation. Since Angular 9, AOT Compilation is the default mode of compilation. When the ng-serve or ng-build command executes, type of compilation depends on the ‘aot’ value present in the respective sections in ‘angular.json’ file.`

![image](https://user-images.githubusercontent.com/53125546/183727894-393464ce-32ab-435a-9a6d-b5ab7bf6443a.png)

**[Note: Also AOT compilation can be done using Angular cli by setting ‘aot’ flag to true in Angular CLI]**

- 1.`ng serve — aot=true`

- 2.`ng build — aot=true`


### 1. JIT Compilation:

`As the name suggests, compilation is done during the run time of application. Browser downloads the compiler along with application files. Compiler is about 45% of the size of vendor.bundle.js file which was loaded in the browser.`

 **Disadvantages:**

- 1. `User has to wait for the compiler to load in the browser first and then application loads. Hence waiting time is increased.`

- 2. `The size of the application is increased due to presence of compiler which will effect the overall performance of the application during runtime.`

- 3. `In this, template binding errors were not detected i.e. the compiler doesn’t throw any error during the build process.`

### 2. AOT Compilation:

`In this process, compilation is done during the build process and compiled files which were bundled, downloaded by the browser. As compilation is already done, vendor.bundle.js file doesn’t contain compiler code and hence it’s size decreases by nearly 50%.`

**Advantages :**

- 1. `Faster rendering of application with AOT as the browser downloads only pre-compiled version of the application. The browser loads executable code so it can render the application immediately, without waiting to compile the app first.`

- 2. `Smaller downloading size of application. There’s no need to download the Angular compiler if the app is already compiled. The compiler is roughly half of Angular itself, so omitting it dramatically reduces the application payload.`

- 3. `In this, template binding errors were detected during build process of the application. Hence template errors were identified earlier.`

### Inspect the JavaScript bundles?

`‘Source-map-explorer’ is a tool which is used to inspect the JavaScript bundles. This tool analyzes the source map generated with the bundle and draws a map of all dependencies. It can be installed in Angular project by following command in CLI.`

<pre>npm install source-map-explorer — save-dev</pre>

`Once the tool is installed, do the development build using ng build command Once the build is completed, execute the following command.`

**node_modules\.bin\source-map-explorer dist\vendor.bundle.js**

`The above command runs the source-map-explorer against the vendor bundle and we see the graph of it in browser. Notice the angular compiler is around 45% percent of the bundle size.`

![image](https://user-images.githubusercontent.com/53125546/183731398-4fc4f14c-6737-43e4-919a-2215e5668448.png)

`Now run the above command after executing AOT compilation command in Angular CLI. We observe that the overall size of vendor.bundle.js file reduced by half.`

![image](https://user-images.githubusercontent.com/53125546/183731582-d6ba8b24-b4ad-43bc-90c1-fbce3a099391.png)

`Hence AOT compilation is very much recommended during the deployment of application in a production server.`
