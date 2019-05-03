import {Component, Input, OnInit} from '@angular/core';
import {Crew} from '../../../tmdb-data/Movie';


@Component({
    selector: 'app-crew-table',
    templateUrl: './crew-table.component.html',
    styleUrls: ['./crew-table.component.scss']
})
export class CrewTableComponent implements OnInit {
    @Input() set crewArray(theArray) {

        theArray.forEach(oneCrew => {
            const theDepartment = this.displayedArray.find(oneDepartment => {
                return oneDepartment.department === oneCrew.department;
            });
            if (theDepartment) {
                theDepartment.crew.push(oneCrew);
            } else {
                this.displayedArray.push({
                    department: oneCrew.department,
                    hidden: !(oneCrew.department === 'Directing' || oneCrew.department === 'Writing'),
                    crew: [oneCrew]
                });
            }
        });
    }

    private displayedArray: { department: string; hidden: boolean; crew: Crew[] }[];

    constructor() {
        this.displayedArray = [];
    }

    ngOnInit(): void {
    }

}
