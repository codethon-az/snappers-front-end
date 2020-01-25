import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-property-not-found',
    templateUrl: './property-not-found.component.html',
    styleUrls: ['./property-not-found.component.scss'],
})
export class PropertyNotFoundComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {
        console.log('property not found works!');
    }

    backToUpload() {
        this.router.navigate(['/uploadimage']);
    }
}
