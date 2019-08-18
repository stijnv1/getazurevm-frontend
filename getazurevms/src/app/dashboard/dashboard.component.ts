import { Component, OnInit } from '@angular/core';
import { Azurevm } from '../azurevm';
import { AzurevmService } from "../azurevm.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  azurevms: Azurevm[] = [];

  constructor(private azurevmService: AzurevmService) { }

  ngOnInit() {
    this.getAzureVMs();
  }

  getAzureVMs(): void {
    this.azurevmService.getAzureVMs()
      .subscribe(azurevms => this.azurevms = azurevms.slice(0,5))
  }

}
