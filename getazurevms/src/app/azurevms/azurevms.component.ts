import { Component, OnInit } from '@angular/core';
import { Azurevm } from '../azurevm';
import { AzurevmService } from "../azurevm.service";

@Component({
  selector: 'app-azurevms',
  templateUrl: './azurevms.component.html',
  styleUrls: ['./azurevms.component.css']
})
export class AzurevmsComponent implements OnInit {
  azurevms: Azurevm[];

  selectedAzurevm : Azurevm;
  
  constructor(private azurevmService: AzurevmService) { }

  ngOnInit() {
    this.getAzureVMs();
  }

  getAzureVMs(): void {
    this.azurevmService.getAzureVMs()
      .subscribe(azurevms => this.azurevms = azurevms)
  }

  onSelect(azurevm: Azurevm): void {
    this.selectedAzurevm = azurevm;
  }

}
