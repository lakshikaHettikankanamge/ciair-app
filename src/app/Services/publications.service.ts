import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

  constructor(private _HttpClient: HttpClient) { }

  getPublications() {
    return this._HttpClient.get<any>(
      `https://localhost:7153/CIAIR/Publications/Select/`
    );
  }
}
