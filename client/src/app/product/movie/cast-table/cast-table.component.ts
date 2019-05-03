import {Component, Input, OnInit} from '@angular/core';
import {Cast} from '../../../tmdb-data/Movie';


@Component({
    selector: 'app-cast-table',
    templateUrl: './cast-table.component.html',
    styleUrls: ['./cast-table.component.scss']
})
export class CastTableComponent implements OnInit {
    @Input() set castArray(theArray) {
        this.displayedArray = theArray;
        this.displayedArray.sort((a, b) => {
            return a.order - b.order;
        });
        console.log(this.displayedArray);
        console.log('toto');
    }

    displayedArray: Cast[];
    private displayTreshold: number;

    constructor() {
        this.displayedArray = [];
        this.displayTreshold = 5;
    }

    ngOnInit(): void {
    }

}
