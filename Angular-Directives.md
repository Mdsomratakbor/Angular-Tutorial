### 1. What is Angular Directives?

`Directives are classes that add additional behavior to elements in your Angular applications.`

### 2. Classification of Directives
![image001](https://user-images.githubusercontent.com/53125546/183284487-ec189e0a-3b11-4c3f-ab02-c625bd0e1c65.jpg)

### What is Component directive? 

- `Component directive, is nothing but a simple class which is decorated with the @component decorator.`
- `Normal typescript class will become a Component class once it has been decorated with @component decorator`
- `It is mainly used to specify the html templates.`
- `It is most commonly used directive in angular project`

**Built In Component Directive @component**

`@component decorator provides additional metadata that determines how the component should be processed, instantiated and used at runtime`

**Simple Example**
`@component`
`File name app.component.ts`
<pre>
import { Component } from "@angular/core";  
//decorator  
@Component({  
         selector: 'my-App',  
  
    template: '<h1>{{name}}</h1>'  
})    
export class AppComponent {  
    name: string = "Angular 2"  
}  
</pre>

### What is attribute directive?

- `It is mainly used to change/modify the behavior of the html element.`
- `As the name tells, it is used to change the attributes of the existing html element.There are many built in attribute directives. Some of the useful ones are NgClass, NgStyle`
