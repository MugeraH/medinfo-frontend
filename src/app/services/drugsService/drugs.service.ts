import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8000/api/drug';

@Injectable({
  providedIn: 'root',
})
export class DrugsService {
  constructor(private http: HttpClient) {}

  getDrugData(id: any): Observable<any> {
    return this.http.get(`${baseUrl}`);
  }

  getDrugDetail(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  addDrug(data: {
    drug_name: string;
    description: string;
    usage_information: string;
    side_effects: string;
    overCounter: boolean;
  }) {
    return this.http.post(baseUrl, data);
  }

  updateDrug(
    id: any,
    data: {
      drug_name: string;
      description: string;
      usage_information: string;
      side_effects: string;
      overCounter: boolean;
    }
  ) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteDrug(id: any) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
