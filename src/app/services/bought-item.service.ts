import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoughtItemService {
  private apiUrl = 'http://localhost:8080/api/bought-items'; // TODO: backend endpoint

  constructor(private http: HttpClient) {}

  getBoughtItemsByUser(userEmail: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/${userEmail}`);
  }
}
