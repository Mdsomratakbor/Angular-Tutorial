import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-composition',
  standalone: false,
  templateUrl: './directive-composition.html',
  styleUrl: './directive-composition.scss',
  
})
export class DirectiveComposition {
  documentation = `  <section class="mt-3">
          <h2>🚀 Directive Composition API</h2>
          <p>
            Angular 15 introduces the <strong>Directive Composition API</strong>, enabling better code reuse and
            composability by allowing developers to apply directives directly to a component's host element
            from within the component's class.
          </p>
          <p>
            Previously, if you wanted to share directive logic across components, you'd have to manually apply the
            directive in every HTML file where it was needed. Now, using the <code>@hostDirectives</code> property,
            you can apply directives inside the component definition—cleaner and more maintainable!
          </p>
          <p><strong>Use cases:</strong></p>
          <ul>
            <li>Sharing event handling logic</li>
            <li>Reusing styling behavior or class manipulation</li>
            <li>Applying custom validators or control behavior</li>
          </ul>
          <p>
            This API significantly elevates the <strong>reusability</strong> and <strong>maintainability</strong>
            of Angular applications by keeping behavior encapsulated and reusable.
          </p>
        </section>`
  code = ``
}
