import { Component } from '@angular/core';

@Component({
  selector: 'app-extended-diagnostics',
  standalone: false,
  templateUrl: './extended-diagnostics.html',
  styleUrl: './extended-diagnostics.scss'
})
export class ExtendedDiagnostics {
  documentation = ` <h1 class="text-primary">🛠 Angular 14 – <code>extendedDiagnostics</code></h1>

  <p class="mt-3">
    The <code>extendedDiagnostics</code> option was introduced in Angular 14 as part of the 
    <code>angularCompilerOptions</code> in your <code>tsconfig.json</code> file. It provides additional 
    compile-time checks and warnings that help catch subtle issues in your templates and components.
  </p>

  <hr />

  <h4 class="text-success">📌 Where to Configure</h4>
  <p>
    You configure <code>extendedDiagnostics</code> inside the <code>angularCompilerOptions</code> section of your 
    <code>tsconfig.app.json</code> or <code>tsconfig.json</code> file.
  </p>

  <pre><code class="language-json">
{
  "angularCompilerOptions": {
    "extendedDiagnostics": {
      "strictNullInputTypes": "warning",
      "strictAttributeTypes": "warning",
      "strictDomLocalRefTypes": "warning",
      "nullishCoalescingNotNullable": "warning",
      "checks": {
        // Maps check name to its category.
        "invalidBananaInBox": "error"
        "nullishCoalescingNotNullable": "warning"
      }
    }
  }
}
  </code></pre>

  <hr />

  <h4 class="text-info">🧩 Available Diagnostic Options</h4>

  <ul>
    <li><strong>strictNullInputTypes</strong>: Warns when inputs don’t properly account for <code>null</code> or <code>undefined</code>.</li>
    <li><strong>strictAttributeTypes</strong>: Enforces strict attribute type validation in templates.</li>
    <li><strong>strictDomLocalRefTypes</strong>: Ensures local DOM references (e.g., <code>#myRef</code>) have correct typings.</li>
    <li><strong>nullishCoalescingNotNullable</strong>: Warns if <code>??</code> is used on values that can’t be <code>null</code> or <code>undefined</code>.</li>
  </ul>

  <hr />

  <h4 class="text-warning">⚠️ Why Use Extended Diagnostics?</h4>
  <ul>
    <li>Helps you follow Angular’s strict typing strategy</li>
    <li>Prevents silent template errors</li>
    <li>Makes your app more robust and upgrade-safe</li>
    <li>Promotes better development practices</li>
  </ul>

  <hr />

  <h4 class="text-success">📌 Example</h4>

  <pre><code class="language-ts">
@Input() username: string;
  </code></pre>

  <pre><code class="language-html">
&lt;user-profile [username]="possiblyNullValue"&gt;&lt;/user-profile&gt;
  </code></pre>

  <p>
    If <code>possiblyNullValue</code> can be <code>null</code>, the compiler will warn you when 
    <code>strictNullInputTypes</code> is set.
  </p>

  <hr />

  <h4 class="text-primary">🎯 Conclusion</h4>
  <p>
    The <code>extendedDiagnostics</code> feature in Angular 14 enhances code safety and ensures better 
    developer experience by giving more visibility into subtle template issues during compile time.
  </p>`
}
