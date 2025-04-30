import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = 'http://localhost:8080/api/apps'; // TODO: backend endpoint

  constructor(private http: HttpClient) {}

  getAllApps(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createApp(appData: any): Observable<any> {
    return this.http.post(this.apiUrl, appData);
  }

  deleteApp(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateApp(id: number, appData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, appData);
  }
}
