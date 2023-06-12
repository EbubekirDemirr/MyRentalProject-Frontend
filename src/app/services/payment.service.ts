import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  apiUrl = 'https://localhost:44347/api/';

  private dataSource = new ReplaySubject<Rental>(1);
  currentData = this.dataSource.asObservable();

  constructor(private httpClient: HttpClient) {}
  updateData(data: Rental) {
    this.dataSource.next(data);
  }

  addRental(rental: Rental): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>( this.apiUrl + 'Rental/add', rental);
  }

  totalPrice(totalAmountInfo: any): Observable<any> {
    let newPath = this.apiUrl + 'Rental/totalprice';

    return this.httpClient.get<any>(newPath, totalAmountInfo);
  }
}
