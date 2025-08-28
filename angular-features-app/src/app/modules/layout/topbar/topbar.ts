import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-topbar',
  standalone: false,
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss'
})
export class Topbar {
@Input() drawer!: MatSidenav;

  toggleSidebar() {
    this.drawer.toggle();
  }



  logout() {
    // Your logout logic here (e.g., call auth service, navigate to login page)
    console.log('User logged out');
  }

    menu = [
    {
      version: 'v14',
      features: [
        { name: 'Typed Forms', route: '/v14/typed-forms', icon: 'description' },
        { name: 'Standalone Components (Preview)', route: '/v14/standalone-preview', icon: 'widgets' },
        { name: 'Extended Diagnostics', route: '/v14/extended-diagnostics', icon: 'bug_report' },
        { name: 'Title Strategy', route: '/v14/title-strategy', icon: 'title' },
        { name: 'Injectable Tree-shakable', route: '/v14/tree-shakable-injectables', icon: 'extension' }
      ]
    },
    {
      version: 'v15',
      features: [
        { name: 'Stable Standalone APIs', route: '/v15/standalone', icon: 'api' },
        { name: 'Directive Composition API', route: '/v15/directive-composition', icon: 'account_tree' },
        { name: 'Functional Router Guards', route: '/v15/functional-guards', icon: 'security' },
        { name: 'Image Directive', route: '/v15/image-directive', icon: 'image' },
        { name: 'Material 3 Support', route: '/v15/material-v3', icon: 'palette' }
      ]
    },
    {
      version: 'v16',
      features: [
        { name: 'Signals (Developer Preview)', route: '/v16/signals', icon: 'signal_cellular_alt' },
        { name: 'DestroyRef', route: '/v16/destroy-ref', icon: 'delete' },
        { name: 'Required Inputs', route: '/v16/required-inputs', icon: 'input' },
        { name: 'Standalone HttpClient', route: '/v16/httpclient', icon: 'http' },
        { name: 'Zone.js Optional', route: '/v16/zone-optional', icon: 'schedule' }
      ]
    },
    {
      version: 'v17',
      features: [
        { name: 'Control Flow Syntax (Preview)', route: '/v17/control-flow', icon: 'sync_alt' },
        { name: 'Deferred Loading', route: '/v17/deferred-loading', icon: 'download' },
        { name: 'Built-in i18n Pipes', route: '/v17/i18n-pipes', icon: 'language' },
        { name: 'Standalone Router (Stable)', route: '/v17/router-enhancements', icon: 'alt_route' },
        { name: 'Signals in Forms', route: '/v17/signal-forms', icon: 'rule' }
      ]
    },
    {
      version: 'v18',
      features: [
        { name: 'Signals Stable', route: '/v18/signals', icon: 'check_circle' },
        { name: 'New Control Flow Stable', route: '/v18/control-flow', icon: 'sync' },
        { name: 'Component Inputs with Signals', route: '/v18/signal-inputs', icon: 'input' },
        { name: 'Zoneless Change Detection', route: '/v18/zoneless-cd', icon: 'bolt' },
        { name: 'Improved Hydration Support', route: '/v18/hydration', icon: 'water_drop' }
      ]
    },
    {
      version: 'v19',
      features: [
        { name: 'Control Flow Enhancements', route: '/v19/control-flow-enhancements', icon: 'loop' },
        { name: 'Improved Forms API with Signals', route: '/v19/signal-forms', icon: 'fact_check' },
        { name: 'Async Pipe Optimizations', route: '/v19/async-optimization', icon: 'hourglass_empty' },
        { name: 'TemplateContextGuard Improvements', route: '/v19/template-guards', icon: 'shield' },
        { name: 'Signal View Models', route: '/v19/view-models', icon: 'view_module' }
      ]
    },
    {
      version: 'v20',
      features: [
        { name: 'Unified Forms API', route: '/v20/forms', icon: 'list_alt' },
        { name: 'Signal Inputs & Outputs', route: '/v20/signal-io', icon: 'swap_horiz' },
        { name: 'Hydration Improvements', route: '/v20/hydration-improvements', icon: 'water' },
        { name: 'New SSR Enhancements', route: '/v20/ssr', icon: 'cloud' },
        { name: 'Material Theme Enhancements', route: '/v20/material-theme', icon: 'color_lens' }
      ]
    }
  ];
}
