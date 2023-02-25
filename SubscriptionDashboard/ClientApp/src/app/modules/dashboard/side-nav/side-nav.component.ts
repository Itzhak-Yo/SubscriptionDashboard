import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule, SubscriptionsComponent, UserDetailsComponent],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {}
