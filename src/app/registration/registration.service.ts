import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient: HttpClient) { }
  registerEmployee(employee: any)
  {
    return this.httpClient.post('/employees', employee);
  }
}
