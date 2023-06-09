import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44347/api/Car/getcardetaildto';
  apiUrl2 = 'https://localhost:44347/api/Car/getbyId';
  apiUrl1 = 'https://localhost:44347/api/';

  constructor(private httpClient: HttpClient) {}
  getCars(): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl);
  }

  getById(): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl2);
  }

  getCarDetails(): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl1 + 'Car/getcardetaildto';
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByColorId(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl1+"Color/getCarByColorId?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }


  getCarDetailsByCarId(
    carId: number
  ): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl1 + 'Car/GetCarDetailByCarId?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarByBrandIdAndColorId(
    brandId: number,
    colorId: number
  ): Observable<ListResponseModel<CarDetail>> {
    let newPath =
      this.apiUrl1 +
      'Car/getCarByBrandIdAndColorId?colorId=' +
      colorId +
      '&brandId=' +
      brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailWithImagesByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath= this.apiUrl1+ "Car/GetCarDetailWithImagesByCarId?carId="+ carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
}
