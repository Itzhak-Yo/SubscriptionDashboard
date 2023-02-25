import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageComponent } from './package/package.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, PackageComponent, SideNavComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  subscriptionId: string | null | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.subscriptionId = params.get('subscriptionId');
      if (this.subscriptionId) {
        // call to api to get all packages based on subscriptionId
      }
    });
  }

  getPackages(subscriptionId: number): void {}
}
