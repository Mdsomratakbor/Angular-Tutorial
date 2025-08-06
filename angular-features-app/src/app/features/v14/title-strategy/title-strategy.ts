import { Component } from '@angular/core';

@Component({
  selector: 'app-title-strategy',
  standalone: false,
  templateUrl: './title-strategy.html',
  styleUrl: './title-strategy.scss'
})
export class TitleStrategy {
  documentation = `<div class="p-3">
      <h3>What is <code>TitleStrategy</code>?</h3>
      <p>
        <code>TitleStrategy</code> is a service that controls how the browser's document title updates during routing. It allows you to override Angular’s default behavior and provide dynamic titles.
      </p>

      <h4>Key Benefits</h4>
      <ul>
        <li>Centralized title logic</li>
        <li>Supports dynamic/custom formatting</li>
        <li>Great for SEO and accessibility</li>
      </ul>

      <h4>Related Imports</h4>
      <pre><code>import { Title } from '@angular/platform-browser';
import { TitleStrategy, RouterStateSnapshot } from '@angular/router';</code></pre>

      <h4>Best Practice</h4>
      <p>Provide the custom strategy globally in <code>AppModule</code> to ensure consistency across the app.</p>
    </div>`
  example = `    <div class="p-3">
      <h4>1. Custom Title Strategy</h4>
      <pre><code>@Injectable()
export class CustomTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);
    if (title !== undefined) {
      this.title.setTitle(MyApp | {title});
    }
  }
}</code></pre>

      <h4>2. Define Titles in Routes</h4>
      <pre><code>const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'About Us' }
];</code></pre>

      <h4>3. Provide Strategy</h4>
      <pre><code>providers: [
  Title,
  { provide: TitleStrategy, useClass: CustomTitleStrategy }
]</code></pre>
    </div>`
}
