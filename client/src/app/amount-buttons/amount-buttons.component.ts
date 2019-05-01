import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-amount-buttons',
    templateUrl: './amount-buttons.component.html',
    styleUrls: ['./amount-buttons.component.scss']
})
export class AmountButtonsComponent implements OnInit {
    private amountValue: number;
    @Output() amountChange: EventEmitter<number> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    increase() {
        this.amountValue++;
    }

    set amount(amount) {
        this.amountValue = amount;
        this.amountChange.emit(this.amountValue);
    }

    @Input()
    get amount(): number {
        return this.amountValue;
    }

    decrease() {

    }
}
