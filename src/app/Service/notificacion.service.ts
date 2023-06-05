import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  private API_Reference="/API/GET/Notificacion";
  private API_POST="/API/POST/Notificacion";

  constructor(
    private http:HttpClient
  ) { }

  public GetAllNotificacion():Observable<any>{
    return this.http.get(this.API_Reference)
  }

  public PostNotificacion(Body:Observable<any>){
    return this.http.post(this.API_POST,Body);
  }
}
