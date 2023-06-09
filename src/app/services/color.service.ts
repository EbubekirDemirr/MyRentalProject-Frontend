import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Color } from '../models/color';
import { CarDetail } from '../models/carDetail';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl="https://localhost:44347/api/Color/getall"
  apiUrl1="https://localhost:44347/api/"

  constructor(private httpClient:HttpClient) { }
  getColors():Observable<ListResponseModel<Color>>{
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl)
  }


}
