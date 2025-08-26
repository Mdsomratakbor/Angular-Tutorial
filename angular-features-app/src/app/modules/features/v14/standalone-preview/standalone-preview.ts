import { Component } from '@angular/core';

@Component({
  selector: 'app-standalone-preview',
  standalone: true,
  templateUrl: './standalone-preview.html',
  styleUrls: ['./standalone-preview.scss']
})
export class StandalonePreview {
  introduction = `
Angular 14 introduces <strong>Standalone Components</strong>, one of the most awaited and powerful features. These components can exist without being declared inside any <code>NgModule</code>, reducing boilerplate and making Angular more modular and modern.
  `;

  whatsNew = `
<ul>
  <li>Use <code>standalone: true</code> in component decorator</li>
  <li>No need to declare in any module</li>
  <li>Can be used directly in Angular routes</li>
  <li>Can import other standalone components, directives, pipes, and modules</li>
</ul>
  `;

  basicExampleTs = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-standalone-preview',
  standalone: true,
  templateUrl: './standalone-preview.html',
  styleUrls: ['./standalone-preview.scss']
})
export class StandalonePreview {}
  `;

  basicExampleHtml = `
&lt;p class="preview-text"&gt;
  ✅ This is a standalone component in Angular 14!
&lt;/p&gt;
  `;

  basicExampleScss = `
.preview-text {
  color: teal;
  font-size: 1.2rem;
  font-weight: bold;
}
  `;

  routeIntegration = `
import { Routes } from '@angular/router';
import { StandalonePreview } from './standalone-preview';

export const routes: Routes = [
  { path: 'preview', component: StandalonePreview }
];
  `;

  benefits = `
<ul>
  <li>Less boilerplate code</li>
  <li>Improved tree-shaking</li>
  <li>Simpler and more intuitive file structures</li>
  <li>Easier code splitting</li>
  <li>Ideal for micro frontends and lazy loading</li>
</ul>
  `;

  commonUseCases = `
<ul>
  <li>Lazy loaded components or pages</li>
  <li>Feature modules simplification</li>
  <li>Building micro frontend architecture</li>
  <li>Unit testing smaller parts without NgModules</li>
</ul>
  `;

  notes = `
<ul>
  <li>You still need to import required Angular modules (e.g. <code>CommonModule</code>)</li>
  <li>Standalone components can use <code>imports: []</code> in their metadata</li>
  <li>Supports other standalone directives, pipes, and services</li>
</ul>
  `;

  conclusion = `
✅ Now you’re ready to use <strong>Standalone Components</strong> in Angular 14 and above! This is the beginning of the transition away from NgModules and toward a simpler Angular experience.
  `;
}
