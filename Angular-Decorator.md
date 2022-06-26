### What are types of decorators in Angular?
- 1. Class Decorators. **Example: @Component, @NgModule**
- 2. Property Decorators. **Example: **
- 3. Method Decorators.
- 4. Parameter Decorators.

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
