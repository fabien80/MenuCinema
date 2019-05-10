import {Component, Input, OnInit} from '@angular/core';
import {MenuClass} from './menu';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ClientService} from '../../services/client.service';
import {ClientInterface} from '../../interface/ClientInterface';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    @Input() private menu: MenuClass;
    @Input() private amount: number;
    private client: ClientInterface;
    private addressControl: FormGroup;


    constructor(private clientService: ClientService,
                private formBuilder: FormBuilder) {

    }

    ngOnInit() {
        this.clientService.client.subscribe((client: ClientInterface) => {
            this.client = client;
        });
        this.addressControl = this.formBuilder.group({
            addrCtrl: ['', Validators.required]
        });
    }

}
