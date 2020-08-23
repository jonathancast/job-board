import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    authenticated = false;
    user = null;

    constructor(private http: HttpClient, private router: Router) {
        http.get('user').toPromise().then(res => {
            this.authenticated = true;
            this.user = res;
        });
    }

    authenticate(credentials) {
        return this.http.get('user', {headers: { authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password) }})
            .toPromise()
            .then(res => {
                this.authenticated = true;
                this.user = res;
                return res;
            })
        ;
    }

    logout() {
        this.http.post('logout', {}).toPromise().then(() => {
            this.authenticated = false;
            this.user = null;
            this.router.navigateByUrl('/login');
        });
    }
}
