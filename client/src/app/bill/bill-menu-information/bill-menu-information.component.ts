import {Component, Input, OnInit} from '@angular/core';
import {MenuClass} from '../../product/menu/menu';

@Component({
    selector: 'app-bill-menu-information',
    templateUrl: './bill-menu-information.component.html',
    styleUrls: ['./bill-menu-information.component.scss']
})
export class BillMenuInformationComponent implements OnInit {
    private isActivated = true;
    @Input() menu: MenuClass;

    constructor() {
    }

    ngOnInit() {
    }

    onClick() {
        this.isActivated = !this.isActivated;
    }
}
