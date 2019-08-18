import { Component, OnInit, Input } from '@angular/core';
import { Azurevm } from '../azurevm';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { AzurevmService } from "../azurevm.service";

@Component({
  selector: 'app-azurevm-detail',
  templateUrl: './azurevm-detail.component.html',
  styleUrls: ['./azurevm-detail.component.css']
})
export class AzurevmDetailComponent implements OnInit {
  azurevm: Azurevm;

  constructor(
    private route: ActivatedRoute,
    private azureVmService: AzurevmService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getAzureVM();
  }

  getAzureVM(): void {
    const vmName = this.route.snapshot.paramMap.get('Name');
    this.azureVmService.getAzureVM(vmName)
      .subscribe(azurevm => this.azurevm = azurevm);
  }

}
