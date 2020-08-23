import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS, HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const xhr = req.clone({
            headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
        });
        return next.handle(xhr);
    }
}

@NgModule({
    declarations: [
        AppComponent,
        MainPageComponent,
        LoginPageComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [AppService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }],
    bootstrap: [AppComponent]
})
export class AppModule { }
