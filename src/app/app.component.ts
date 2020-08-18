import { Component } from '@angular/core';

import { AppService } from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'client';

    constructor(private app: AppService) {}

    get userName() { return this.app?.user?.name }

    logout() {
    }
}
