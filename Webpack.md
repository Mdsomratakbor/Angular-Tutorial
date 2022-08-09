# Webpack

The Angular build process uses webpack behind the scenes to transpile TypeScript to JavaScript, transform Sass files to CSS, and many other tasks. To understand the importance of this build tool, it helps to understand why it exists.

Browsers have very limited support for JavaScript modules. In practice, any JavaScript application loaded into the browser should be contained in a single source file. On the other hand, it is good software development practice to separate out code into modules contained in separate files. When deploying a JavaScript application for the browser, the modules must then be built into a single source file. Bundling multiple modules into a single file is the main purpose of webpack.

Webpack is not limited to simply bundling source files. Because it can support a multitude of plugins, it can perform many additional tasks. Webpack module loaders are able to parse different file types. This allows, for example, Angular TypeScript files to use the import statement to import stylesheet files. Usually, webpack is hidden behind the Angular command-line tool. But in some cases, it may be necessary to tweak the configuration of webpack when building an Angular application.
