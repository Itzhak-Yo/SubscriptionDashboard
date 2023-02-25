import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PIE_CHART_CONFIG } from './configs/pie-chart.config';
import { CommonModule } from '@angular/common';
import { PackageType } from 'src/app/core/models/package';

@Component({
  selector: 'app-package',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule, NgxChartsModule],
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css'],
})
export class PackageComponent {
  @Input() PackageData!: {
    packageType: PackageType;
    packageName: string;
    packageUsage: {
      used: number;
      total: number;
    };
  };

  used = Math.round(Math.random() * 100);
  // pie chart
  PIE_CHART_CONFIG = PIE_CHART_CONFIG;
  single = [
    {
      name: 'Used',
      value: this.used,
    },
    {
      name: 'Remaining',
      value: 100 - this.used,
    },
  ];

  constructor() {}

  // can be used later
  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  //
}
