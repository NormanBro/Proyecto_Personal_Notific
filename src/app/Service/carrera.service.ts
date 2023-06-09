import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CarreraService {
  private API_REF="/API/GET/Carrera"
  private API_POST="/API/POST/Carrera"
  constructor(
    private http:HttpClient
  ) { }

  GetAllCarrera():Observable<any>{
    return this.http.get(this.API_REF);
  }
  PostCarrera(Body:Observable<any>){
    return this.http.post(this.API_POST,Body);
  }
}
