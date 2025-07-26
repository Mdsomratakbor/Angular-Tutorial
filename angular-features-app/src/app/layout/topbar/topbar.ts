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
}
