import { Component, OnInit, QueryList, ViewChildren, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, AfterViewInit {
    
    @ViewChildren("tab") tabs: QueryList<any>;
    @ViewChild("indicator") indicator: ElementRef;
    @ViewChild('firstFocus') firstFocusEl : ElementRef;

    constructor() { }
    ngOnInit() { }
    ngAfterViewInit(): void {
        setTimeout(() => {
            this.firstFocusEl.nativeElement.focus();
        }, 0);
        this.tabs.forEach((tab:ElementRef) => {
            tab.nativeElement.addEventListener('click', () => {
                var parent = tab.nativeElement.parentNode;
                var clickedTabIndex = Array.from(parent.children).indexOf(tab.nativeElement);
                var xPosition = clickedTabIndex * 160;
                this.indicator.nativeElement.style.transform = `translateX(${xPosition}px)`;
            })
        });
    }

}