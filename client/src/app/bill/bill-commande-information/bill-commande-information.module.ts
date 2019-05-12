import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BillCommandeInformationComponent} from './bill-commande-information.component';
import {BillMenuInformationModule} from '../bill-menu-information/bill-menu-information.module';
import {MatButtonModule, MatExpansionModule, MatIconModule} from '@angular/material';
import {AddReviewComponent} from "../../dialogs/add-review/add-review.component";
import {AddReviewModule} from "../../dialogs/add-review/add-review.module";

@NgModule({
    declarations: [BillCommandeInformationComponent],
    imports: [
        CommonModule,
        BillMenuInformationModule,
        MatButtonModule,
        MatExpansionModule,
        AddReviewModule,
        MatIconModule
    ], exports: [BillCommandeInformationComponent]
})
export class BillCommandeInformationModule {
}
