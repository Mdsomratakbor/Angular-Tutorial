import { Component } from '@angular/core';

@Component({
  selector: 'app-deferred-loading',
  standalone: false,
  templateUrl: './deferred-loading.html',
  styleUrl: './deferred-loading.scss'
})
export class DeferredLoading {
  loadComponent = false;

  dataLoaded = false;


 users = [
    { id: 1, name: 'Alice', status: 'active', loaded: false },
    { id: 2, name: 'Bob', status: 'inactive', loaded: false },
    { id: 3, name: 'Charlie', status: 'pending', loaded: false }
  ];
 loadDetails(user: any) {
    setTimeout(() => {
      user.loaded = true;
    }, 1000);
  }
}
