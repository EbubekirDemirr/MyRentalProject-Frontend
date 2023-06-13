import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Brand } from '../models/brand';
import { SingleResponseModel } from '../models/singleResponseModel';
import { CarDetail } from '../models/carDetail';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = "https://localhost:44347/api/Brand/getall";
  apiUrl1 = "https://localhost:44347/api"


  constructor(private httpClient: HttpClient) {}



  getBrands(): Observable<ListResponseModel<Brand>> {
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
  }

  getCarByBrandId(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl1+"/Brand/getCarByBrandId?brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  brandAdd(brand:Brand):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl1+"/Brand/add",brand);
  }
}
