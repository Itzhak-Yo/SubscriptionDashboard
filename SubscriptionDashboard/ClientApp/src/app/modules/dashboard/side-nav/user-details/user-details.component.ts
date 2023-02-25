import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { EditUserDetailsComponent } from './edit-user-details/edit-user-details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
  ],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent {
  constructor(public dialog: MatDialog, private router: Router) {}

  openUserAdressEditPopup(): void {
    const dialogRef = this.dialog.open(EditUserDetailsComponent, {
      data: { name: 'name', animal: 'animal' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed: ', result);
    });
  }

  switchUser(): void {
    this.router.navigate(['/login']);
  }
}
