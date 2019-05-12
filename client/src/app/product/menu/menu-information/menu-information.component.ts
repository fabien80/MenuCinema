import {Component, Input, OnInit} from '@angular/core';
import {MenuClass} from '../menu';

@Component({
    selector: 'app-menu-information',
    templateUrl: './menu-information.component.html',
    styleUrls: ['./menu-information.component.scss']
})
export class MenuInformationComponent implements OnInit {
    private isActivated = true;
    @Input() menu: MenuClass;

    constructor() {
    }

    ngOnInit() {}

    onClick() {
        this.isActivated = !this.isActivated;
    }
}
