import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductType} from '../../../enum/ProductType';
import {MatDialog} from '@angular/material';
import {AddEventInterface} from '../../../interface/AddEventInterface';
import {Product} from '../../class/Product';
import {Food} from '../../food/food';
import {MenuClass} from '../../menu/menu';
import {AddProductToBasketComponent} from '../../../dialogs/add-product-to-basket/add-product-to-basket.component';
import {ProductGroup} from '../../class/productGroup';
import {AddEventType} from '../../../enum/AddEventType';
import {environment} from '../../../../environments/environment';
import {ProductGroupInterface} from '../../../interface/ProductInterface';


@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    @Output() private addEvent: EventEmitter<AddEventInterface> = new EventEmitter();
    @Input() private type: ProductType;
    @Input() private products: Product[];
    @Input() private eventType: AddEventType;
    private gridContent: Product[][];

    constructor(public dialog: MatDialog) {

    }

    ngOnInit() {
        console.log(this.products);
        this.gridContent = [];
        this.initGridContent();

    }

    isMenu(product: Product) {
        return product instanceof MenuClass;
    }

    toFood(product) {
        return product as Food;
    }

    openDialog(product: Product) {
        const dialogRef = this.dialog.open(AddProductToBasketComponent, {
            width: '250',
            data: product
        });

        dialogRef.afterClosed().toPromise().then((productGroupInterface: ProductGroupInterface<any>) => {
            if (productGroupInterface !== undefined) {
                const addEvent: AddEventInterface = {
                    data: productGroupInterface,
                    event: this.eventType
                };
                this.addEvent.emit(addEvent);
            }
        });
    }

    initGridContent() {
        for (let i = 0, j = 0; i < this.products.length; i++) {
            if (i >= environment.nbItemsPerRow && i % environment.nbItemsPerRow === 0) {
                j++;
            }
            this.gridContent[j] = this.gridContent[j] || [];
            this.gridContent[j].push(this.products[i]);
        }
    }


    toMenu(product: Product) {
        return product as MenuClass;
    }
}
