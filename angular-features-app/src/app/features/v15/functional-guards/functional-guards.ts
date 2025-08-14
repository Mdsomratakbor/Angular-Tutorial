import { Component } from '@angular/core';

@Component({
  selector: 'app-functional-guards',
  standalone: false,
  templateUrl: './functional-guards.html',
  styleUrl: './functional-guards.scss'
})
export class FunctionalGuards {

    documentation = `      <div class="p-4">
        <h2 class="mb-3">🔍 What are Functional Guards?</h2>
        <p>
          Functional Guards are stateless functions that implement route protection in Angular without creating a service class. 
          Angular 15 makes this feature stable and highly recommended for modern apps.
        </p>

        <h3 class="mt-4">💡 Key Advantages:</h3>
        <ul>
          <li>✅ No need for classes or <code>@Injectable</code></li>
          <li>✅ Tree-shakable – unused guards are removed from build</li>
          <li>✅ Direct use of <code>inject()</code> for services</li>
          <li>✅ Easier to test and maintain</li>
        </ul>

        <h4 class="mt-4">🧱 Supported Functional Guard Types:</h4>
        <ul>
          <li><strong>CanActivateFn</strong> – For route activation</li>
          <li><strong>CanDeactivateFn</strong> – For leaving a component</li>
          <li><strong>CanLoadFn</strong> – For lazy loading modules</li>
          <li><strong>CanMatchFn</strong> – For matching route conditions</li>
        </ul>

        <p class="mt-4">
          📚 <strong>Official Docs:</strong>
          <a href="https://angular.io/guide/router#functional-route-guards" target="_blank">
            Functional Route Guards – Angular Docs
          </a>
        </p>
      </div>`


    example = `  <div class="p-4">
        <h3>🔐 Functional <code>authGuard</code> Example</h3>

        <h5>📁 <code>auth.guard.ts</code></h5>
        <pre><code class="language-ts">
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLoggedIn()
    ? true
    : router.createUrlTree(['/login']);
};
        </code></pre>

        <h5 class="mt-4">📁 <code>app.routes.ts</code></h5>
        <pre><code class="language-ts">
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  }
];
        </code></pre>

        <h5 class="mt-4">📁 <code>auth.service.ts</code></h5>
        <pre><code class="language-ts">
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
        </code></pre>

        <p class="mt-4 text-muted">
          You can replace the token check with your own login logic or use <code>HttpClient</code> for API calls.
        </p>
      </div>`
}
