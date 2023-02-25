import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAddress, IUser } from '../models/user.model';
import { IContract } from '../models/contract';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getUser(userId: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.baseUrl}/users/${userId}`);
  }

  getContract(contractId: number): Observable<IContract> {
    return this.http.get<IContract>(`${this.baseUrl}/contracts/${contractId}`);
  }

  updateUserAddress(userId: number, address: IAddress): Observable<IUser> {
    return this.http.put<IUser>(`${this.baseUrl}/users/${userId}/address`, {
      address,
    });
  }
}
