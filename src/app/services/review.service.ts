import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'http://localhost:8080/api/reviews'; // TODO: backend endpoint

  constructor(private http: HttpClient) {}

  submitReview(reviewData: any): Observable<any> {
    return this.http.post(this.apiUrl, reviewData);
  }
}
