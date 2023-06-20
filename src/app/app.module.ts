import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BASE_URL, ENV_API } from '@assets';
import { environment } from '@environments';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptor, TokenInterceptor } from './shared/interceptors';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorInterceptor,
        multi: true,
    },{
        provide: ENV_API,
        useValue: environment.apiURL,
    },
    {
        provide: BASE_URL,
        useValue: environment.baseURL,
    },
    {
        provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
        useValue: { duration: 2500 }
    }
],
  bootstrap: [AppComponent],
})
export class AppModule {}
