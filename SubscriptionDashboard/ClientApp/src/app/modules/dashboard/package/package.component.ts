import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PIE_CHART_CONFIG } from './pie-chart.config';

@Component({
  selector: 'app-package',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, NgxChartsModule],
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css'],
})
export class PackageComponent {
  @Input() PackageData!: {
    packageType: string;
    packageName: string;
    packageUsage: {
      used: number;
      total: number;
    };
  };

  // pie chart
  PIE_CHART_CONFIG = PIE_CHART_CONFIG;
  single = [
    {
      name: 'Used',
      value: 20,
    },
    {
      name: 'Remaining',
      value: 80,
    },
  ];

  constructor() {}

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
