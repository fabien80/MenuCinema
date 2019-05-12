import {Component, Input, OnInit} from '@angular/core';
import {Basket} from '../basket/Basket';
import {ClientInterface} from '../interface/ClientInterface';
import {ClientService} from '../services/client.service';
import {AddressInterface} from '../interface/AddressInterface';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
    selector: 'app-bill',
    templateUrl: './bill.component.html',
    styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
    @Input() private basket: Basket;
    private client: ClientInterface;

    constructor(private clientService: ClientService) {
    }

    ngOnInit() {
        this.clientService.client.subscribe((client: ClientInterface) => {
            this.client = client;
        });
    }

    getDate() {
        const date: Date = new Date(Date.now());
        return date.getUTCDate();
    }

    public captureScreen() {
        const data = document.querySelector('.content-to-convert');
        html2canvas(data).then(canvas => {
            // Few necessary setting options
            const imgWidth = 208;
            const pageHeight = 295;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            const heightLeft = imgHeight;

            const contentDataURL = canvas.toDataURL('image/png');
            const pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
            const position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('facture.pdf'); // Generated PDF
        });
    }

}
