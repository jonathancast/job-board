import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../app.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
    credentials = {username: '', password: ''};

    constructor(private app: AppService, private router: Router) {}

    login() {
        this.app.authenticate(this.credentials).then(res => {
            this.router.navigateByUrl('/');
        });
    }
}
