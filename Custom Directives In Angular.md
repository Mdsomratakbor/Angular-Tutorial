### 1. What is an Angular Directive?
`Directives are the functions which will execute whenever Angular compiler finds it. Angular Directives enhance the capability of HTML elements by attaching custom behaviors to the DOM.`

`From the core concept, Angular directives are categorized into three categories.`

- **1. Attribute Directives**
- **2. Structural Directives**
- **3. Components**

### Creating a Custom Attribute Directive
`Creating a custom directive is just like creating an Angular component. To create a custom directive we have to replace @Component decorator with @Directive decorator.`

`So, let's get started with creating our first Custom Attribute directive. In this directive, we are going to highlight the selected DOM element by setting an element’s background color.`

`Create an highlight.directive.ts file in src/app folder and add the code snippet below.`

<pre>
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ChangeTextBackground]'
})
export class HighlightDirective {

  constructor(private eleRef: 
    ElementRef) {
      eleRef.nativeElement.style.background='red';
      eleRef.nativeElement.style.fontSize = '42px';
      eleRef.nativeElement.style.color = 'white';

     }

}
</pre>
