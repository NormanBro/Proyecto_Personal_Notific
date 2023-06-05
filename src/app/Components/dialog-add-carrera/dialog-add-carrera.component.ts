import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { UniAcademicaService } from 'src/app/Service/uni-academica.service';
import { CarreraService } from 'src/app/Service/carrera.service';

@Component({
  selector: 'app-dialog-add-carrera',
  templateUrl: './dialog-add-carrera.component.html',
  styleUrls: ['./dialog-add-carrera.component.css']
})
export class DialogAddCarreraComponent {
  UniAcademic: any;
  FormAddCarrera!: FormGroup;

  constructor(
    private UA: UniAcademicaService,
    private Formbuilders: FormBuilder,
    private Carrera:CarreraService
  ) {
    this.UA.GetAllUnidadAcademic().subscribe(Datos => {
      this.UniAcademic = Datos;
    })
  }


  ngOnInit(): void {
    this.FormAddCarrera=this.Formbuilders.group({
      Nombre:[''],
      Descripcion:[''],
      Encargado:[''],
      IDUniAcademica:[''],
    })
  }

  OnSumbitAddCarrera(){
    this.Carrera.PostCarrera(this.FormAddCarrera.value).subscribe(item=>{})
  }

}
