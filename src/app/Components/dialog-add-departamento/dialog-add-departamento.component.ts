import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { UniAcademicaService } from 'src/app/Service/uni-academica.service';
import { DepartamentoService } from 'src/app/Service/departamento.service';

@Component({
  selector: 'app-dialog-add-departamento',
  templateUrl: './dialog-add-departamento.component.html',
  styleUrls: ['./dialog-add-departamento.component.css']
})
export class DialogAddDepartamentoComponent {

  UniAcademic: any;
  FormAddDepart!: FormGroup;
  constructor(
    private UA: UniAcademicaService,
    private Formbuilders: FormBuilder,
    private Depart:DepartamentoService
  ) {
    this.UA.GetAllUnidadAcademic().subscribe(Datos => {
      this.UniAcademic = Datos;
    })
  }
  ngOnInit(): void {
    this.FormAddDepart=this.Formbuilders.group({
      Nombre:[''],
      Descripcion:[''],
      Encargado:[''],
      IDUniAcademica:[''],
    })
  }

  OnSumbitAddDepart(){
    this.Depart.PostDepartamento(this.FormAddDepart.value).subscribe(item=>{})
  }
}
