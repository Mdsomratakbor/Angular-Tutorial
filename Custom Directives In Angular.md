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

`Here, we are importing Directive and ElementRef from Angular core. The Directive provides the functionality of @Directive decorator in which we provide its property selector to` **Highlight** `so that we can use this selector anywhere in the application. We are also importing the ElementRef which is responsible for accessing the DOM element.`

`Now to get` **Highlight** `Directive to work, we need to add our Directive to the declarations array in the` **app.module.ts** `file.`

<pre>
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';
import { StoreModule } from '@ngrx/store';
import { CustomCounterInputComponent } from './counter/custom-counter-input/custom-counter-input.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './Shared/Components/header/header.component';
import { PostComponent } from './posts/post/post.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { appReducer } from './counter/store/state/app.state';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CustomCounterInputComponent,
    HomeComponent,
    HeaderComponent,
    PostComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
    
    StoreModule.forRoot(appReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

</pre>