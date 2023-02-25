import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { IContract, SubscriptionType } from 'src/app/core/models/contract';
import { PackageType } from 'src/app/core/models/package';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscriptions',
  standalone: true,
  imports: [CommonModule, MatDividerModule, MatCardModule],
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css'],
})
export class SubscriptionsComponent {
  constructor(private router: Router) {}
  subscriptions: IContract[] = [
    {
      subscriptionId: 15467,
      subscriptionName: 'Basic Subscription',
      subscriptionType: SubscriptionType.Personal,
      packages: [
        {
          id: 11,
          type: PackageType.Basic,
          name: 'Personal Package',
          totalAmount: 100,
          usedAmount: 6,
        },
        {
          id: 12,
          type: PackageType.Premium,
          name: 'Personal Package',
          totalAmount: 100,
          usedAmount: 27,
        },
      ],
    },
    {
      subscriptionId: 27878,
      subscriptionName: 'Premium Subscription',
      subscriptionType: SubscriptionType.Enterprise,
      packages: [
        {
          id: 21,
          type: PackageType.Premium,
          name: 'Personal Package',
          totalAmount: 100,
          usedAmount: 77,
        },
      ],
    },
    {
      subscriptionId: 3555544,
      subscriptionName: 'Basic Subscription',
      subscriptionType: SubscriptionType.Business,
      packages: [
        {
          id: 31,
          type: PackageType.Premium,
          name: 'Personal Package',
          totalAmount: 100,
          usedAmount: 50,
        },
      ],
    },
  ];

  trackBySubscriptionId(index: number, subscription: IContract): number {
    return subscription.subscriptionId;
  }

  modifyQuery(subscriptionId: number): void {
    this.router.navigate([], {
      queryParams: { subscriptionId },
      queryParamsHandling: 'merge',
    });
  }
}
