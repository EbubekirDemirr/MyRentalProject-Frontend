import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/ListResponseModel';
import { Rental } from '../models/rental';
import { Observable } from 'rxjs';
import { RentalDetail } from '../models/rentalDetail';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
apiUrl="https://localhost:44347/api/Rental/getall"
apiUrl1="https://localhost:44347/api/Rental/getrentaldetail"
apiUrl2="https://localhost:44347/api/"

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<RentalDetail>>{
    return this.httpClient.get<ListResponseModel<RentalDetail>>(this.apiUrl)
  }
  getRentalDetail():Observable<ListResponseModel<RentalDetail>>{
    return this.httpClient.get<ListResponseModel<RentalDetail>>(this.apiUrl1)
  }
}

