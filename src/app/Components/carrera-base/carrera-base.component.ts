import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarreraService } from 'src/app/Service/carrera.service';
@Component({
  selector: 'app-carrera-base',
  templateUrl: './carrera-base.component.html',
  styleUrls: ['./carrera-base.component.css']
})
export class CarreraBaseComponent {
  Carrera:any={};
  constructor(
    private srvCarrera:CarreraService,
    private router:Router,
    private local:Location
  ){
    this.srvCarrera.GetAllCarrera().subscribe(car=>{
      this.Carrera=car;
    })
  }

  OnBack(){
    this.local.back();
  }

  ngOnInit(): void {
    if(!localStorage.getItem('Session')){
      this.router.navigate(['/'])
    }
  }
}
