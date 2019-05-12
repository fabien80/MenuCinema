import {Component, Input, OnInit} from '@angular/core';
import {ReviewInterface} from "../../../interface/ReviewInterface";

@Component({
    selector: 'app-review',
    templateUrl: './review.component.html',
    styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
    @Input() review: ReviewInterface;
    constructor() {
    }

    ngOnInit() {
    }

}
