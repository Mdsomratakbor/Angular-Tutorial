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

