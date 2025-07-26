import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
menu = [
  {
    version: 'v14',
    features: [
      { name: 'Typed Forms', route: '/v14/typed-forms' },
      { name: 'Standalone Components (Preview)', route: '/v14/standalone-preview' },
      { name: 'Extended Diagnostics', route: '/v14/extended-diagnostics' },
      { name: 'Title Strategy', route: '/v14/title-strategy' },
      { name: 'Injectable Tree-shakable', route: '/v14/tree-shakable-injectables' }
    ]
  },
  {
    version: 'v15',
    features: [
      { name: 'Stable Standalone APIs', route: '/v15/standalone' },
      { name: 'Directive Composition API', route: '/v15/directive-composition' },
      { name: 'Functional Router Guards', route: '/v15/functional-guards' },
      { name: 'Image Directive', route: '/v15/image-directive' },
      { name: 'Material 3 Support', route: '/v15/material-v3' }
    ]
  },
  {
    version: 'v16',
    features: [
      { name: 'Signals (Developer Preview)', route: '/v16/signals' },
      { name: 'DestroyRef', route: '/v16/destroy-ref' },
      { name: 'Required Inputs', route: '/v16/required-inputs' },
      { name: 'Standalone HttpClient', route: '/v16/httpclient' },
      { name: 'Zone.js Optional', route: '/v16/zone-optional' }
    ]
  },
  {
    version: 'v17',
    features: [
      { name: 'Control Flow Syntax (Preview)', route: '/v17/control-flow' },
      { name: 'Deferred Loading', route: '/v17/deferred-loading' },
      { name: 'Built-in i18n Pipes', route: '/v17/i18n-pipes' },
      { name: 'Standalone Router (Stable)', route: '/v17/router-enhancements' },
      { name: 'Signals in Forms', route: '/v17/signal-forms' }
    ]
  },
  {
    version: 'v18',
    features: [
      { name: 'Signals Stable', route: '/v18/signals' },
      { name: 'New Control Flow Stable', route: '/v18/control-flow' },
      { name: 'Component Inputs with Signals', route: '/v18/signal-inputs' },
      { name: 'Zoneless Change Detection', route: '/v18/zoneless-cd' },
      { name: 'Improved Hydration Support', route: '/v18/hydration' }
    ]
  },
  {
    version: 'v19',
    features: [
      { name: 'Control Flow Enhancements', route: '/v19/control-flow-enhancements' },
      { name: 'Improved Forms API with Signals', route: '/v19/signal-forms' },
      { name: 'Async Pipe Optimizations', route: '/v19/async-optimization' },
      { name: 'TemplateContextGuard Improvements', route: '/v19/template-guards' },
      { name: 'Signal View Models', route: '/v19/view-models' }
    ]
  },
  {
    version: 'v20',
    features: [
      { name: 'Unified Forms API', route: '/v20/forms' },
      { name: 'Signal Inputs & Outputs', route: '/v20/signal-io' },
      { name: 'Hydration Improvements', route: '/v20/hydration-improvements' },
      { name: 'New SSR Enhancements', route: '/v20/ssr' },
      { name: 'Material Theme Enhancements', route: '/v20/material-theme' }
    ]
  }
];


}
