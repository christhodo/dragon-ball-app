import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Saiyan } from '../models/saiyan';
import {
  SaiyanEnvironment,
  SAIYAN_ENVIRONMENT,
} from '@dragon-ball-app/environment';

const BASE_URL = 'https://thirty-by-thirty-app.herokuapp.com';

@Injectable({
  providedIn: 'root',
})
export class SaiyansService {
  model = 'saiyans';

  constructor(
    private http: HttpClient,
    @Inject(SAIYAN_ENVIRONMENT) private environment: SaiyanEnvironment
  ) {}

  all() {
    return this.http.get<Saiyan[]>(this.getUrl());
  }

  find(id) {
    return this.http.get<Saiyan>(this.getUrlWithID(id));
  }

  create(saiyan) {
    return this.http.post<Saiyan>(this.getUrl(), saiyan);
  }

  update(saiyan) {
    return this.http.put<Saiyan>(this.getUrlWithID(saiyan.id), saiyan);
  }

  delete(id) {
    return this.http.delete<Saiyan>(this.getUrlWithID(id));
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithID(id) {
    return `${this.getUrl()}/${id}`;
  }
}
