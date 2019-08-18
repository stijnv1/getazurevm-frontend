import { Injectable } from '@angular/core';
import { Azurevm } from './azurevm';
import { AZUREVMS } from "./mock-azurevmlist";
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AzurevmService {
  private azurevmAPI = 'http://localhost:8080/getazurevms'

  getAzureVMs(): Observable<Azurevm[]> {
    return of(AZUREVMS)
  }

  getAzureVM(Name: string): Observable<Azurevm> {
    return of(AZUREVMS.find(azurevm => azurevm.Name == Name))
  }

  constructor(
    private http: HttpClient
  ) { }
}
