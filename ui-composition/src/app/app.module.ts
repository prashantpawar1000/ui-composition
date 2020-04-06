import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { environment } from 'src/environments/environment';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  entryComponents: [
    AppComponent,
    LoginComponent,
  ]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap(appRef: ApplicationRef) {
    //for web component
    if (environment.production) {
      console.log('web component env build...')

      const login = createCustomElement(LoginComponent, { injector: this.injector })
      customElements.define('urms-login', login)
    } else {
      console.log('dev env build...')
      appRef.bootstrap(AppComponent);
    }
  }
}
