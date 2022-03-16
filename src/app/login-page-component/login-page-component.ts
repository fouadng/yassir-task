import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page-component.scss'],
})

export class LoginPageComponent implements OnInit, AfterViewInit {

    @ViewChild('firstFocus') firstFocusEl : ElementRef;

    constructor() { }
    ngOnInit() { }  
    
    ngAfterViewInit(): void {
        setTimeout(() => {
            this.firstFocusEl.nativeElement.focus();
        }, 0);
    }
    
}