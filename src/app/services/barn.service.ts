import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Barn } from '../models/barn'

@Injectable({
  providedIn: 'root'
})
export class BarnService {
  baseURL: string = "https://localhost:7284/api/barn"

  constructor(private http: HttpClient) { }

  getAllBarns(): Observable<Barn[]> {
    return this.http.get<Barn[]>(this.baseURL);
  }

  createBarn(newBarn: Barn){
    return this.http.post(this.baseURL, newBarn)
  }

  getBarn(barnId: number){
    return this.http.get<Barn>(`${this.baseURL}/barnId`)
  }

  updateBarn(updatedBarn: Barn){
    return this.http.put(`${this.baseURL}/${updatedBarn.barnId}`, updatedBarn);
  }
}