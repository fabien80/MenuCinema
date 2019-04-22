import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
    @Input() private searchValue = '';
    @Output() searchEvent: EventEmitter<string> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    public onChange(target: any) {
        this.searchEvent.emit(target.value);
    }

}
