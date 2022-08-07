### 1. What is Angular Directives?

`Directives are classes that add additional behavior to elements in your Angular applications.`

### 2. Classification of Directives
![image001](https://user-images.githubusercontent.com/53125546/183284487-ec189e0a-3b11-4c3f-ab02-c625bd0e1c65.jpg)

### 3.What is Component directive? 

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

### 4. What is attribute directive?

- `It is mainly used to change/modify the behavior of the html element.`
- `As the name tells, it is used to change the attributes of the existing html element.There are many built in attribute directives. Some of the useful ones are NgClass, NgStyle`

**Built-In Attribute Directive: NgStyle, NgClass**

**NgStyle**

`NgStyle directive is similar to one of data binding technique called style binding in angular, but the main difference is, NgStyle used to set multiple inline styles for html element.`

**NgClass**

`It is similar to NgStyle attribute but here it is using class attribute of the html element to apply the style.`


### 5.What is Structural Directive?
- `Structural directives are responsible for HTML layout. They shape or reshape the DOM's structure, typically by adding, removing, or manipulating elements.`
- `To say in simple words, unlike Attribute Directive which we see above, Structural directive is used to add or remove the Dom Element itself in the Dom Layout, whereas attribute directives are used to just change the attribute or appearance of the Dom element.`
- `Structural directives are easy to recognize by using an asterisk (*)`

***Built-in structural directive - NgIf, NgFor, and NgSwitch***

**Additional Note about @Directive**

`IF we want create a custom attribute, then we can mark a normal class as an Angular 2 directive with the help of a @Directive decorator.`

### 6. Difference between Component, Attribute and Structural Directives? 

<table style="outline: 0px; color: #333333; border-collapse: collapse;" border="1" cellspacing="1" bgcolor="#ffffff" width="100%"><tbody style="outline: 0px;"><tr style="outline: 0px;" bgcolor="#0270bf"><td style="border: 1px dashed #ababab; color: #ffffff;"><strong>Component</strong></td><td style="border: 1px dashed #ababab; color: #ffffff;"><strong>Attribute &nbsp;Directive</strong></td><td style="border: 1px dashed #ababab;"><strong style="color: #ffffff;">Structural Directives</strong></td></tr><tr><td style="border: 1px dashed #ababab;">Component directive is used to specify the template/html &nbsp;for the Dom Layout</td><td style="border: 1px dashed #ababab;">Attribute directive is used to change/modify the behaviour of the html element in the Dom Layout</td><td style="border: 1px dashed #ababab;">Structural directive used to add or remove the html Element in the Dom Layout,</td></tr><tr><td style="border: 1px dashed #ababab;"><strong>Built in<br><br></strong>@component</td><td style="border: 1px dashed #ababab;"><strong>Built in <br><br></strong>NgStyle, NgClass</td><td style="border: 1px dashed #ababab;"><strong>Built in <br><br></strong>*NgIf,*NgFor,*NgSwitch</td></tr></tbody>
</table>
