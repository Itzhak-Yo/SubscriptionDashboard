import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageComponent } from './package/package.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, PackageComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {}
