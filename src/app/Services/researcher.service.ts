import { Injectable } from '@angular/core';
import { ResearcherModel } from '../Models/ResearcherModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ResearcherService {
  constructor(private _HttpClient: HttpClient) {}

  researcherModel = new ResearcherModel();

  getResearcherDetailsByID(ID: number, levelID: number) {
    return this._HttpClient.get<any>(
      `https://localhost:7153/CIAIR/Researches/Select/${ID}/${levelID}`
    );
  }
}
