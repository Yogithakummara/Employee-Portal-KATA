import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor(private httpClient: HttpClient) { }
  getAllEmployee()
  {
    return this.httpClient.get('/employees');
  }
}
