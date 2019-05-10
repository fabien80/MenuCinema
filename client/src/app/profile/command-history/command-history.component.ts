import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../services/client.service";

@Component({
  selector: 'app-command-history',
  templateUrl: './command-history.component.html',
  styleUrls: ['./command-history.component.scss']
})
export class CommandHistoryComponent implements OnInit {
    private clientService: ClientService;

  constructor(clientService:ClientService) {
      this.clientService = clientService;
  }

  ngOnInit() {

    console.log("toto");
    console.log(this.clientService.getClientHistory());
  }

}
