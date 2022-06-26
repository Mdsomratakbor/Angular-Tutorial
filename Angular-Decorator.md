### What are types of decorators in Angular?
- 1. Class Decorators. **Example: @Component, @NgModule**
- 2. Property Decorators. **Example: @Input and @Output (These two decorators are used inside a class)**
- 3. Method Decorators. **Example: @HostListener**
- 4. Parameter Decorators. **Example: **

**1. Class Decorator :** `Angular class decorator are top level decorator,  we use to express intent for classes.They allow us to tell Angular that a particular class is a component, or module, for example. And the decorator allows us to define this intent without having to actually put any code inside the class.`

<pre>
import { NgModule, Component } from '@angular/core';

@Component({
  selector: 'example-component',
  template: '<div>Woo a component!</div>',
})
export class ExampleComponent {
  constructor() {
    console.log('Hey I am a component!');
  }
}

@NgModule({
  imports: [],
  declarations: [],
})
export class ExampleModule {
  constructor() {
    console.log('Hey I am a module!');
  }
}
</pre>
`Notice how both classes by themselves are effectively the same. No code is needed within the class to tell Angular that it is a component or a module. All we need to do is decorate it, and Angular will do the rest.`



**2. Property Decorator:** `These are probably the second most common decorators that you’ll come across. They allow us to decorate specific properties within our classes - an extremely powerful mechanism.`

![input](https://user-images.githubusercontent.com/53125546/175805924-3e844533-51e0-4846-8d1d-1ba28dd68094.svg)

![output](https://user-images.githubusercontent.com/53125546/175805925-a61c0a7f-8a7b-4734-b83f-26bba5d35993.svg)

**Let’s take a look at @Input()**

<pre>
import { Component, Input } from '@angular/core';
@Component({
  selector: 'example-component',
  template: '<div>Woo a component!</div>'
})
export class ExampleComponent {
  @Input()
  exampleProperty: string;
}
</pre>
`We’d then pass the input binding via a component property binding:`
<pre>
<example-component
  [exampleProperty]="exampleData">
</example-component>
</pre>

`The property decorator and “magic” happens within the ExampleComponent definition.`

`In AngularJS 1.x (I’m going to use TypeScript here also, just to declare a property on a class), we had a different mechanism using scope or bindToController with Directives, and bindings within the new component method:`
<pre>
const exampleComponent = {
  bindings: {
    exampleProperty: '&lt;&#039;,
  },
  template: `
    <div>Woo a component!</div>
  `,
  controller: class ExampleComponent {
    exampleProperty: string;
    $onInit() {
      // access this.exampleProperty
    }
  },
};

angular.module('app').component('exampleComponent', exampleComponent);
</pre>

`You can see above that we have two separate properties to maintain should we expand, refactor or change our component’s API - bindings and the property name inside the class. However, in Angular there is a single property exampleProperty which is decorated, which is easier to change, maintain and track as our codebase grows.`

`Angular Directives In-Depth eBook Cover Free eBook`

**Method Decorators**
`Method decorators are very similar to property decorators but are used for methods instead. This let’s us decorate specific methods within our class with functionality. A good example of this is @HostListener. This allows us to tell Angular that when an event on our host happens, we want the decorated method to be called with the event.`

<pre>
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'example-component',
  template: 'Woo a component!'
})
export class ExampleComponent {
  @HostListener('click', ['$event'])
  onHostClick(event: Event) {
    // clicked, `event` available
  }
}
</pre>

**Parameter Decorators**
`Parameter decorators are quite interesting. You may have come across these when injecting primitives into a constructor, where you need to manually tell Angular to inject a particular provider.`
`Parameter decorators allow us to decorate parameters in our class constructors. An example of this is @Inject that lets us tell Angular what we want that parameter to be initiated with:`

<pre>
import { Component, Inject } from '@angular/core';
import { MyService } from './my-service';

@Component({
  selector: 'example-component',
  template: 'Woo a component!'
})
export class ExampleComponent {
  constructor(@Inject(MyService) myService) {
    console.log(myService); // MyService
  }
}
</pre>
