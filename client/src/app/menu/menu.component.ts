import {Component, Input, OnInit} from '@angular/core';
import {Menu} from '../interface/basket';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    @Input() private menu: Menu;

    constructor() {
    }

    ngOnInit() {
    }

}
