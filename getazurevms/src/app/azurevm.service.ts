import { Injectable } from '@angular/core';
import { Azurevm } from './azurevm';
import { AZUREVMS } from "./mock-azurevmlist";
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AzurevmService {
  private azurevmAPI = 'http://172.30.164.231:8000/getazurevms';
  azurevms:Observable<Azurevm[]>;


  getAzureVMs(): Observable<Azurevm[]> {
    this.azurevms = this.http.get<Azurevm[]>(this.azurevmAPI);
    console.log(this.azurevms);
    return this.azurevms;
  }

  getAzureVM(Name: string): Observable<Azurevm> {
    return of(AZUREVMS.find(azurevm => azurevm.Name == Name))
  }

  constructor(
    private http: HttpClient
  ) { }
}
