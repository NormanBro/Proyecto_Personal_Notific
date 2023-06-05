import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

import { UniAcademicaService } from 'src/app/Service/uni-academica.service';
import { DepartamentoService } from 'src/app/Service/departamento.service';
import { CarreraService } from 'src/app/Service/carrera.service';
import { UsuariosService } from 'src/app/Service/usuarios.service';

@Component({
  selector: 'app-dialog-add-users',
  templateUrl: './dialog-add-users.component.html',
  styleUrls: ['./dialog-add-users.component.css']
})

export class DialogAddUsersComponent implements OnInit {
  UniAcademic:any;
  Departamento:any;
  Car:any;
  
  FormAddUsers!:FormGroup;

  constructor(
    private UA:UniAcademicaService,
    private Depart:DepartamentoService,
    private Carrera:CarreraService,
    private Formbuilders:FormBuilder,
    private Usuario:UsuariosService
  ){
    this.UA.GetAllUnidadAcademic().subscribe(Datos=>{
      this.UniAcademic=Datos;
    })
    this.Depart.GetAllDepartamento().subscribe(Datos=>{
      this.Departamento=Datos;
    })
    this.Carrera.GetAllCarrera().subscribe(Datos=>{
      this.Car=Datos;
    })
  }

  OnSumbitAddUser(){
    console.log(this.FormAddUsers.value)
    this.Usuario.PostUsuarios(this.FormAddUsers.value).subscribe(ele=>{
      console.log(ele)
    })
    
  }

  ngOnInit(): void {
    this.FormAddUsers=this.Formbuilders.group({
      Nombre:[''],
      NoCuenta:[''],
      Password:[''],
      IDRol:[''],
      IDCarrera:[''],
      IDUniAcademica:[''],
      IDDepart:['']
    })
  }
}
