import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DepartamentoService } from 'src/app/Service/departamento.service';
@Component({
  selector: 'app-departamentos-base',
  templateUrl: './departamentos-base.component.html',
  styleUrls: ['./departamentos-base.component.css']
})
export class DepartamentosBaseComponent {
  Departamento:any={};
  constructor(
    private srv:DepartamentoService,
    private router:Router,
    private local:Location
  ){
    this.srv.GetAllDepartamento().subscribe(Depa=>{
      this.Departamento=Depa;
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
