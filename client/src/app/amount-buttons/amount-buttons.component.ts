import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-amount-buttons',
    templateUrl: './amount-buttons.component.html',
    styleUrls: ['./amount-buttons.component.scss']
})
export class AmountButtonsComponent implements OnInit {
    private amountValue: number;
    @Output() amountChange: EventEmitter<number> = new EventEmitter();
    @Output() increaseEvent: EventEmitter<number> = new EventEmitter();
    @Output() decreaseEvent: EventEmitter<number> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    increase() {
        this.amount = this.amountValue + 1;
        this.increaseEvent.emit(this.amountValue);
    }

    set amount(amount: number) {
        this.amountValue = amount;
        this.amountChange.emit(this.amountValue);
    }

    @Input()
    get amount(): number {
        return this.amountValue;
    }

    decrease() {
        if (this.amount > 1) {
            this.amount = this.amountValue - 1;
            this.decreaseEvent.emit(this.amountValue);
        }

    }
}
