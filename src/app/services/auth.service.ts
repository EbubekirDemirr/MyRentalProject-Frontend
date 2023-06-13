import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { ResponseModel } from '../models/responseModel';
import { TokenModel } from '../models/tokenModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { RegisterModel } from '../models/registerModel';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { LocalstorageService } from './local-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  apiUrl1 = 'https://localhost:44347/api/';

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalstorageService,
    private jwtHelper: JwtHelperService
  ) {}

  login(loginModel: LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiUrl1 + 'Auth/login',
      loginModel
    );
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
  register(
    registerModel: RegisterModel
  ): Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiUrl1 + 'Auth/register',
      registerModel
    );
  }
 
}
