import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-add-food-to-cart',
    templateUrl: './add-food-to-cart.component.html',
    styleUrls: ['./add-food-to-cart.component.scss']
})
export class AddFoodToCartComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<AddFoodToCartComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {
        
    }

    ngOnInit() {
    }

}
