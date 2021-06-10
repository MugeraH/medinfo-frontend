import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8000/api/illness';


@Injectable({
  providedIn: 'root',
})
export class IllnessService {
  constructor(private http: HttpClient) {}

  getIllnessData(id: any): Observable<any> {
    return this.http.get(`${baseUrl}`);
  }

  getIllnessDetail(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  getSearchIllness(search_term: any): Observable<any> {
    return this.http.get(`${baseUrl}/${search_term}`);
  }

  addIllness(data: {
    illnessname: string;
    description: string;
    symptoms: string;
    recommendation: string;
  }) {
    return this.http.post(baseUrl, data);
  }

  updateIllness(
    id: any,
    data: {
      illnessname: string;
      description: string;
      symptoms: string;
      recommendation: string;
    }
  ) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteIllness(id: any) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
