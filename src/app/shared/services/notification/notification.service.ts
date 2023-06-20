import { Injectable } from '@angular/core';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { NotificationComponent } from '../../ui-kit';


export const DELAY_TIME_3000 = 3000;
const snackBarConfig: MatSnackBarConfig = {
      duration: DELAY_TIME_3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
}

@Injectable({providedIn: 'root'})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  error(message: string): void {
    this.snackBar.openFromComponent(NotificationComponent, {
      data: { message },
      panelClass: ['mat-snackbar_error'],
      ...snackBarConfig
    });
  }

  success(message: string): void {
    this.snackBar.openFromComponent(NotificationComponent, {
      data: { message },
      panelClass: ['mat-snackbar_success'],
      ...snackBarConfig
    });
  }
}
