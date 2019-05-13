import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Product} from '../../product/class/Product';

@Component({
    selector: 'app-generic-dialog',
    templateUrl: './generic-dialog.component.html',
    styleUrls: ['./generic-dialog.component.scss']
})
export class GenericDialogComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<GenericDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public msg: string) {
    }

    ngOnInit() {
    }

    close() {
        this.dialogRef.close();
    }
}
