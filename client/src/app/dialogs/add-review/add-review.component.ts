import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Product} from "../../product/class/Product";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ReviewListComponent} from "../../product/review-list/review-list.component";
import {ReviewInterface} from "../../interface/ReviewInterface";
import {RatingChangeEvent} from "angular-star-rating";
import {ApiService} from "../../services/api.service";

@Component({
    selector: 'app-add-review',
    templateUrl: './add-review.component.html',
    styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {
    private reviewCtrl: FormControl;
    private formGroup: FormGroup;

    constructor(public dialogRef: MatDialogRef<AddReviewComponent>,
                @Inject(MAT_DIALOG_DATA) public data: ReviewInterface,
                private formBuilder: FormBuilder,
                private apiService: ApiService) {

    }

    ngOnInit() {
        this.reviewCtrl = new FormControl(this.data.review, Validators.required);
        this.formGroup = this.formBuilder.group({
            review: this.reviewCtrl
        });
    }

    onSubmit() {
        this.data.review = this.reviewCtrl.value;
        console.log(this.data);
        this.apiService.addReview(this.data)
            .then(() => {
                console.log('review-list added');
            })
            .catch(reason => {
                console.log(reason);
            })

    }

    ratingChage(event: RatingChangeEvent) {
        this.data.note = event.rating;
    }
}
