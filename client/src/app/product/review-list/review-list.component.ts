import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {ReviewInterface} from "../../interface/ReviewInterface";
import {ProductService} from "../product.service";
import {Product} from "../class/Product";
import {UserReviewInterface} from "../../interface/UserReviewInterface";

@Component({
    selector: 'app-review-list',
    templateUrl: './review-list.component.html',
    styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {
    @Input() private product: Product;
    private userReviews: UserReviewInterface[];

    constructor(private apiService: ApiService,
                private productService: ProductService) {

    }

    ngOnInit() {
        const review: ReviewInterface = {
            produitId: this.product.id.toString(),
            typeProduit: this.productService.productTypeToDBProduct(this.product.type)
        };
        this.apiService.getReviewsOfProduct(review).then((value: UserReviewInterface[]) => {
            this.userReviews = value;
            console.log(value);
        });


    }



}
