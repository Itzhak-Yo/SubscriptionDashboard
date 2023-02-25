import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageComponent } from './package/package.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, PackageComponent, SideNavComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {}
