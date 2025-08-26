import { Component } from '@angular/core';

@Component({
  selector: 'app-standalone',
  standalone: false,
  templateUrl: './standalone.html',
  styleUrl: './standalone.scss'
})
export class Standalone {
  document=`  <h1 class="text-primary">🧩 Angular 15 – Standalone Components Are Now Stable</h1>

  <p class="mt-3">
    Angular 15 brings <strong>Standalone Components</strong> into the <strong>stable API surface</strong>, marking a major milestone in Angular’s evolution toward a more modular, lightweight framework. First introduced in Angular 14 as a developer preview, standalone components are now fully supported and production-ready.
  </p>

  <hr />

  <h4 class="text-success mt-4">🚀 Key Benefits</h4>
  <ul>
    <li>📦 Eliminate the need for <code>NgModules</code></li>
    <li>🧩 Simplify component reuse and lazy loading</li>
    <li>⚡ Faster and easier application bootstrapping</li>
    <li>🌐 Better support for dynamic imports and code splitting</li>
  </ul>

  <hr />

  <h4 class="text-info mt-4">🆕 What’s New in Angular 15 for Standalone APIs</h4>
  <ul>
    <li><strong>📁 Standalone Pipes and Directives:</strong> Now you can create standalone pipes and directives just like components.</li>
    <li><strong>🛠 Router Support:</strong> Angular Router now fully supports standalone components with simplified route definitions.</li>
    <li><strong>🎯 Improved Dependency Injection:</strong> Better tree-shaking and optimized DI with standalone components.</li>
    <li><strong>🔥 CLI Support:</strong> The Angular CLI now supports generating standalone components, pipes, and directives with the <code>--standalone</code> flag.</li>
  </ul>

  <hr />

  <h4 class="text-warning mt-4">💡 Example: Defining a Standalone Component</h4>
  <pre><code class="language-ts">
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  template: '&lt;h2&gt;Hello from Standalone!&lt;/h2&gt;',
})
export class HelloComponent {}
  </code></pre>

  <h4 class="text-warning mt-4">💡 Example: Routing to a Standalone Component</h4>
  <pre><code class="language-ts">
import { Routes } from '@angular/router';
import { HelloComponent } from './hello.component';

export const routes: Routes = [
  {
    path: 'hello',
    component: HelloComponent
  }
];
  </code></pre>

  <hr />

  <h4 class="text-primary mt-4">⚙️ CLI Example</h4>
  <p>Generate a standalone component:</p>
  <pre><code class="language-bash">
ng generate component hello --standalone
  </code></pre>

  <hr />

  <h4 class="text-success mt-4">📚 Summary</h4>
  <p>
    Standalone components are no longer experimental. Angular 15’s stable release makes them the preferred way to structure new Angular applications, offering cleaner architecture, better performance, and easier testing.
  </p>`
}
