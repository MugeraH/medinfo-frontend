import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

const baseUrl = 'https://medinfo-api.herokuapp.com/api/drug';

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

  getSearchDrugs(search_term: any): Observable<any> {
    return this.http.get(`${baseUrl}/${search_term}`);
  }

  addDrug(data: {
    drug_name: string;
    type: string;
    description: string;
    usage_information: string;
    side_effects: string;
    safety_advice_alcohol: string;
    safety_advice_pregnancy: string;
    safety_advice_breast_feeding: string;
    safety_advice_driving: string;
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
