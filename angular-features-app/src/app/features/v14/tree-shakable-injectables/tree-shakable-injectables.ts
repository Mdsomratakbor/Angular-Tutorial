import { Component, Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  getMessage() {
    return 'Tree-shakable injectable service works!';
  }
}

@Component({
  selector: 'app-tree-shakable-injectables',
  standalone: false,
  templateUrl: './tree-shakable-injectables.html',
  styleUrl: './tree-shakable-injectables.scss'
})
export class TreeShakableInjectables {

  message: string;
  constructor(private exampleSr: ExampleService) {
    this.message = this.exampleSr.getMessage();
  }

  introduction = `Tree-shakable injectables are a powerful feature introduced in Angular 14 to improve bundle size optimization.
        By marking services with <code>providedIn</code> in the <code>@Injectable</code> decorator, Angular can include
        only the services that are actually used in your application during build time.`
  exampleService = `<code>
@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  constructor() { }
  getValue(): string {
    return 'Hello from tree-shakable service!';
  }
}
      </code>`


      exampleTreeShakableService = `<code>
import { Component, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  getMessage() {
    return 'Tree-shakable injectable service works!';
  }
}

@Component({
  selector: 'app-tree-shakable-injectables',
  template: \`
    <p>{{ message }}</p>
  \`
})
export class TreeShakableInjectablesComponent {
  message: string;
  constructor(private exampleService: ExampleService) {
    this.message = this.exampleService.getMessage();
  }
}
      </code>`
}
