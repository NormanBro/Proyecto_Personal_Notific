import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private API_Reference="/API/GET/Usuario";
  private API_POST="/API/POST/Usuario";
  constructor(private http:HttpClient) {

  }
  public GetAllUsuarios():Observable<any>{
    return this.http.get(this.API_Reference);
  }
  public PostUsuarios(Body:Observable<any>){
    return this.http.post(this.API_POST,Body)
  }
}
