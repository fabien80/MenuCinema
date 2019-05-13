import {Component, Input, OnInit} from '@angular/core';
import {Crew} from '../../../tmdb-data/Movie';
import {environment} from '../../../../environments/environment';


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

    getPhoto(oneMember: Crew) {
        if (oneMember.profile_path == null) {
            return `${environment.apiBaseUrl}photo/anonymous.png`;
        }
        return `https://image.tmdb.org/t/p/w138_and_h175_face${oneMember.profile_path}`;

    }

}
