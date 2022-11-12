import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {
  private pathAPI = 'http://localhost:5237';
  constructor(private http: HttpClient) { }
}
