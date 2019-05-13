import {Component, Input, OnInit, Pipe} from '@angular/core';
import {Cast} from '../../../tmdb-data/Movie';
import {environment} from '../../../../environments/environment';


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

    }

    displayedArray: Cast[];
    private displayTreshold: number;

    constructor() {
        this.displayedArray = [];
        this.displayTreshold = 5;
    }

    ngOnInit(): void {
    }

    getPhoto(oneMember: Cast) {
        if (oneMember.profile_path == null) {
            return `${environment.apiBaseUrl}photo/anonymous.png`;
        }

        return ` https://image.tmdb.org/t/p/w138_and_h175_face${oneMember.profile_path}`;
    }
}
