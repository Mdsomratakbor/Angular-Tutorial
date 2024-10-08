### 1. What is Angular? Why was it introduced?
`Angular was introduced to create Single Page applications. This framework brings structure and consistency to web applications and provides excellent scalability and 
maintainability.`

`Angular is an open-source, JavaScript framework wholly written in TypeScript. It uses HTML's syntax to express your application's components clearly.`

### 2. What is TypeScript?
`TypeScript is a superset of JavaScript that offers excellent consistency. It is highly recommended, as it provides some syntactic sugar and makes the code base more comfortable to understand and maintain. Ultimately, TypeScript code compiles down to JavaScript that can run efficiently in any environment.`

### 3. What is data binding? Which type of data binding does Angular deploy?
`Data binding is a phenomenon that allows any internet user to manipulate Web page elements using a Web browser. It uses dynamic HTML and does not require complex scripting or programming. We use data binding in web pages that contain interactive components such as forms, calculators, tutorials, and games. Incremental display of a webpage makes data binding convenient when pages have an enormous amount of data.` 

`Angular uses the two-way binding. Any changes made to the user interface are reflected in the corresponding model state. Conversely, any changes in the model state are reflected in the UI state. This allows the framework to connect the DOM to the Model data via the controller. However, this approach affects performance since every change in the DOM has to be tracked.`

### 4. What are Single Page Applications (SPA)?
`Single-page applications are web applications that load once with new features just being mere additions to the user interface. It does not load new HTML pages to display the new page's content, instead generated dynamically. This is made possible through JavaScript's ability to manipulate the DOM elements on the existing page itself. A SPA approach is faster, thus providing a seamless user experience`

### 5. What are decorators in Angular? 
Decorators are a design pattern or functions that define how Angular features work. They are used to make prior modifications to a class, service, or filter. Angular supports four types of decorators, they are:

- Class Decorators
- Property Decorators
- Method Decorators
- Parameter Decorators

### 6. Mention some advantages of Angular.
`Some of the common advantages of Angular are - `

**MVC architecture -**`Angular is a full-fledged MVC framework. It provides a firm opinion on how the application should be structured. It also offers bi-directional data flow and updates the real DOM.`
**Modules:** `Angular consists of different design patterns like components, directives, pipes, and services, which help in the smooth creation of applications.`
**Dependency injection:** `Components dependent on other components can be easily worked around using this feature.` 
`Other generic advantages include clean and maintainable code, unit testing, reusable components, data binding, and excellent responsive experience.`

### 7. What are Templates in Angular?

`Angular Templates are written with HTML that contains Angular-specific elements and attributes. In combination with the model and controller's information, these templates are further rendered to provide a dynamic view to the user.`

### 8. What are Annotations in Angular?
`Annotations in Angular are used for creating an annotation array. They are the metadata set on the class that is used to reflect the Metadata library.`

### 9. What are Directives in Angular?
`Directives are attributes that allow the user to write new HTML syntax specific to their applications. They execute whenever the Angular compiler finds them in the DOM. Angular supports three types of directives.`  

- 1.Component Directives
- 2.Structural Directives
- 3.Attribute Directives 

### 10. What is an AOT compilation? What are its advantages?
`The Ahead-of-time (AOT) compiler converts the Angular HTML and TypeScript code into JavaScript code during the build phase, i.e., before the browser downloads and runs the code.`

`Some of its advantages are as follows.`

- `Faster rendering`
- `Fewer asynchronous requests`
- `Smaller Angular framework download size`
- `Quick detection of template errors`
- `Better security`

### 11. What are Components in Angular?
Components Heirarchy
<img width="915" alt="Components_Heirarchy-Angular_Components" src="https://user-images.githubusercontent.com/53125546/175920669-cddccb52-d699-4994-8673-57e5bc50d6fb.png">

`Components are the basic building blocks of the user interface in an Angular application. Every component is associated with a template and is a subset of directives. An Angular application typically consists of a root component, which is the AppComponent, that then branches out into other components creating a hierarchy.`


### 12. What are Pipes in Angular? 

<img width="340" alt="Angular_Pipes" src="https://user-images.githubusercontent.com/53125546/175921137-be7b5140-d67f-42e2-b778-b410b9f49c66.png">

`Pipes are simple functions designed to accept an input value, process, and return as an output, a transformed value in a more technical understanding. Angular supports several built-in pipes. However, you can also create custom pipes that cater to your needs.`

`Some key features include:`

- 1. Pipes are defined using the pipe “|” symbol. 
- 2. Pipes can be chained with other pipes.
- 3. Pipes can be provided with arguments by using the colon (:) sign.


### 13. What is the PipeTransform interface?

`As the name suggests, the interface receives an input value and transforms it into the desired format with a transform() method. It is typically used to implement custom pipes.`

<pre>
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
transform(items: any, filter: any, isAnd: boolean): any {
    if (filter && Array.isArray(items)) {
      let filterKeys = Object.keys(filter);
      if (isAnd) {
        return items.filter((item) =>
          filterKeys.reduce(
            (memo, keyName) =>
              (memo && new RegExp(filter[keyName], "gi").test(item[keyName])) ||
              filter[keyName] === "" ||
              filter[keyName] === null,
            true
          )
        );
      } else {
        return items.filter(item => {
          return filterKeys.some((keyName) => {
            console.log(keyName);
            return (
              new RegExp(filter[keyName], "gi").test(item[keyName]) ||
              filter[keyName] === "" ||
              filter[keyName] === null
            );
          });
        });
      }
    } else {
      return items;
    }
  }
}

</pre>

### 14. What are Pure Pipes? 
`These pipes are pipes that use pure functions. As a result of this, a pure pipe doesn't use any internal state, and the output remains the same as long as the parameters passed stay the same. Angular calls the pipe only when it detects a change in the parameters being passed. A single instance of the pure pipe is used throughout all components.`

### 15. What are Impure Pipes?
`For every change detection cycle in Angular, an impure pipe is called regardless of the change in the input fields. Multiple pipe instances are created for these pipes. Inputs passed to these pipes can be mutable.` 

`By default, all pipes are pure. However, you can specify impure pipes using the pure property, as shown below.`
<pre>
@Pipe({
  name: 'demopipe',
  pure : true/false 
})
</pre>

### 16. What is an ngModule?
`NgModules are containers that reserve a block of code to an application domain or a workflow. @NgModule takes a metadata object that generally describes the way to compile the template of a component and to generate an injector at runtime. In addition, it identifies the module's components, directives, and pipes, making some of them public, through the export property so that external components can use them.`

### 17. What are filters in Angular? Name a few of them.
`Filters are used to format an expression and present it to the user. They can be used in view templates, controllers, or services. Some inbuilt filters are as follows.` 

- date - Format a date to a specified format.
- filter - Select a subset of items from an array.
- Json - Format an object to a JSON string.
- limitTo -  Limits an array/string, into a specified number of elements/characters.
- lowercase - Format a string to lowercase.

### 18. What is view encapsulation in Angular?

`View encapsulation defines whether the template and styles defined within the component can affect the whole application or vice versa. Angular provides three encapsulation strategies:`

- `Emulated - styles from the main HTML propagate to the component.`
- `Native - styles from the main HTML do not propagate to the component.`
- `None - styles from the component propagate back to the main HTML and therefore are visible to all components on the page.`


### 19. What are controllers?
`AngularJS controllers control the data of AngularJS applications. They are regular JavaScript Objects. The ng-controller directive defines the application controller.`

### 20. What do you understand by scope in Angular?
`The scope in Angular binds the HTML, i.e., the view, and the JavaScript, i.e., the controller. It as expected is an object with the available methods and properties. The scope is available for both the view and the controller. When you make a controller in Angular, you pass the $scope object as an argument.`

### 21. Explain the lifecycle hooks in Angular?

`In Angular, every component has a lifecycle. Angular creates and renders these components and also destroys them before removing them from the DOM. This is achieved with the help of lifecycle hooks. Here's the list of them -`

- **ngOnChanges() -** `Responds when Angular sets/resets data-bound input properties.`
- **ngOnInit() -** `Initialize the directive/component after Angular first displays the data-bound properties and sets the directive/component's input properties/`
- **ngDoCheck() -** `Detect and act upon changes that Angular can't or won't detect on its own.`
- **ngAfterContentInit() -** `Responds after Angular projects external content into the component's view.`
- **ngAfterContentChecked() -** `Respond after Angular checks the content projected into the component.`
- **ngAfterViewInit() -** `Respond after Angular initializes the component's views and child views.`
- **ngAfterViewChecked() -** `Respond after Angular checks the component's views and child views.`
- **ngOnDestroy -** `Cleanup just before Angular destroys the directive/component.`

### 22. What is String Interpolation in Angular?
`String Interpolation is a one-way data-binding technique that outputs the data from TypeScript code to HTML view. It is denoted using double curly braces. This template expression helps display the data from the component to the view.`
<pre>
<span>{{ data }}</span>
</pre>

### 23. What are Template statements?
Template statements are properties or methods used in HTML for responding to user events. With these template statements, the application that you create or are working on, can have the capability to engage users through actions such as submitting forms and displaying dynamic content.

For example, 
<pre>
<button (click)="deleteHero()"> Delete hero </button>
</pre>
The template here is deleteHero. The method is called when the user clicks on the button.

### 24. What is the difference between AOT and JIT? 
`Ahead of Time (AOT) compilation converts your code during the build time before the browser downloads and runs that code. This ensures faster rendering to the browser. To specify AOT compilation, include the --aot option with the ng build or ng serve command.`

`The Just-in-Time (JIT) compilation process is a way of compiling computer code to machine code during execution or run time. It is also known as dynamic compilation. JIT compilation is the default when you run the ng build or ng serve CLI commands.` 

### 25. Explain the @Component Decorator?

`TypeScript class is one that is used to create components. This genre of class is then decorated with the "@Component" decorator. The decorato’s purpose is to accept a metadata object that provides relevant information about the component.`

![image](https://user-images.githubusercontent.com/53125546/176659824-15dd491b-18d9-4231-ac3e-2894fe355e2b.png)

`The image above shows an App component - a pure TypeScript class decorated with the “@Component” decorator. The metadata object that gets accepted by the decorator provides properties like templateUrl, selector, and others, where the templateUrL property points to an HTML file defining what you see on the application.`

### 26. What are Services in Angular? 

`Angular Services perform tasks that are used by multiple components. These tasks could be data and image fetching, network connections, and database management among others. They perform all the operational tasks for the components and avoid rewriting of code. A service can be written once and injected into all the components that use that service.` 

https://www.simplilearn.com/ice9/free_resources_article_thumb/Angular_Services.PNG

### 27. What are Promises and Observables in Angular? 
`While both the concepts deal with Asynchronous events in Angular, Promises handle one such event at a time while observables handle a sequence of events over some time.`

**Promises** - `They emit a single value at a time. They execute immediately after creation and are not cancellable. They are Push errors to the child promises.` 

**Observables** - `They are only executed when subscribed to them using the subscribe() method. They emit multiple values over a period of time. They help perform operations like forEach, filter, and retry, among others. They deliver errors to the subscribers. When the unsubscribe() method is called, the listener stops receiving further values.`

### 28. What is ngOnInit? How is it defined? 

`ngOnInit is a lifecycle hook and a callback method that is run by Angular to indicate that a component has been created. It takes no parameters and returns a void type.`
<pre>

export class MyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //....

  }

}
</pre>

### 29. How to use ngFor in a tag? 
`The ngFor directive is used to build lists and tables in the HTML templates. In simple terms, this directive is used to iterate over an array or an object and create a template for each element. `

<ul> 
      <li *ngFor = "let items in itemlist"> {{ item }} </li>
</ul>


`“Let item” creates a local variable that will be available in the template
“Of items” indicates that we are iterating over the items iterable. 
The * before ngFor creates a parent template.`

### 30. What are Template and Reactive forms?
**Template-driven approach**

- `In this method, the conventional form tag is used to create forms. Angular automatically interprets and creates a form object representation for the tag.` 
- `Controls can be added to the form using the NGModel tag. Multiple controls can be grouped using the NGControlGroup module.`
- `A form value can be generated using the “form.value” object. Form data is exported as JSON values when the submit method is called.` 
- `Basic HTML validations can be used to validate the form fields. In the case of custom validations, directives can be used.` 
- `Arguably, this method is the simplest way to create an Angular App.`
 
**Reactive Form Approach**

- `This approach is the programming paradigm oriented around data flows and propagation of change.` 
- `With Reactive forms, the component directly manages the data flows between the form controls and the data models.` 
- `Reactive forms are code-driven, unlike the template-driven approach.` 
- `Reactive forms break from the traditional declarative approach.`
- `Reactive forms eliminate the anti-pattern of updating the data model via two-way data binding.`
- `Typically, Reactive form control creation is synchronous and can be unit tested with synchronous programming techniques.`

### 31. What is Eager and Lazy loading? 
`Eager loading is the default module-loading strategy. Feature modules under Eager loading are loaded before the application starts. This is typically used for small size applications.`

`Lazy loading dynamically loads the feature modules when there's a demand. This makes the application faster. It is used for bigger applications where all the modules are not required at the start of the application.`

### 32. What type of DOM does Angular implement? 
`DOM (Document Object Model) treats an XML or HTML document as a tree structure in which each node is an object representing a part of the document.`

`Angular uses the regular DOM. This updates the entire tree structure of HTML tags until it reaches the data to be updated. However, to ensure that the speed and performance are not affected, Angular implements Change Detection.`

`With this, you have reached the end of the article. We highly recommend brushing up on the core concepts for an interview. It’s always an added advantage to write the code in places necessary.` 
