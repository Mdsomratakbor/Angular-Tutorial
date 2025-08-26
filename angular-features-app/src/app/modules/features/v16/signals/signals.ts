import { Component } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: false,
  templateUrl: './signals.html',
  styleUrl: './signals.scss'
})
export class Signals {
  example = `   <h2>Signal Example: Counter</h2>
      <pre><code class="language-typescript">
import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: \`
    <h3>Count: {{ count() }}</h3>
    <h4>Double Count: {{ doubleCount() }}</h4>
    <button mat-raised-button color="primary" (click)="increment()">Increment</button>
  \`
})
export class CounterComponent {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  constructor() {
    effect(() => {
      console.log('Count changed:', this.count());
    });
  }

  increment() {
    this.count.update(v => v + 1);
  }
}
      </code></pre>

      <p>
        This example shows how to use <code>signal</code>, <code>computed</code>, and <code>effect</code>
        to create a reactive counter without RxJS.
      </p>`
}
