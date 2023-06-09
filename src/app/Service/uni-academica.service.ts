import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniAcademicaService {
  private API_REF="/API/GET/UnidadAca"
  private API_POST="/API/POST/UnidadAca"
  constructor(private http:HttpClient) { }

  public GetAllUnidadAcademic():Observable<any>{
    return this.http.get(this.API_REF)
  }
  public PostUnidadAcademic(Body:Observable<any>){
    return this.http.post(this.API_POST,Body);
  }
}
