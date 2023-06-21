import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { NgxsModule } from '@ngxs/store';
import { BreedState, CatState, CategoriesState } from '@store/state';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { FooterModule, HeaderModule } from './components';

import { ErrorInterceptor, TokenInterceptor } from './shared/interceptors';
import { BASE_URL, ENV_API } from '@assets/injectTokens';
import { environment } from '@environments';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HeaderModule,
    FooterModule,
    MatSnackBarModule,
    NgxsModule.forRoot([CatState, BreedState, CategoriesState], {
      developmentMode: !environment.production
    })
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
