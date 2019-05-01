import {Component, Input, OnInit} from '@angular/core';
import {MenuClass} from './menu';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    @Input() private menu: MenuClass;

    constructor() {
    }

    ngOnInit() {
    }

}
