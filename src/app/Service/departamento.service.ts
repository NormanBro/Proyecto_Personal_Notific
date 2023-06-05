import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private API_REF="/API/GET/Departamento"
  private API_POST="/API/POST/Departamento"
  constructor(private http:HttpClient) { }

  GetAllDepartamento():Observable<any>{
    return this.http.get(this.API_REF);
  }
  PostDepartamento(Body:Observable<any>){
    return this.http.post(this.API_POST,Body);
  }
}
