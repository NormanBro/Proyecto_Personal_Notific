import { Component } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

import { UniAcademicaService } from 'src/app/Service/uni-academica.service';

@Component({
  selector: 'app-dialog-add-unidad',
  templateUrl: './dialog-add-unidad.component.html',
  styleUrls: ['./dialog-add-unidad.component.css']
})
export class DialogAddUnidadComponent {
  FormAddUnidad!:FormGroup;

  constructor(
    private Formbuilders:FormBuilder,
    private Unidad:UniAcademicaService
  ){}
  ngOnInit(): void {
    this.FormAddUnidad=this.Formbuilders.group({
      Nombre:[''],
      Descripcion:[''],
      Encargado:['']
    })
  }

  OnSumbitAddUindad(){
    this.Unidad.PostUnidadAcademic(this.FormAddUnidad.value).subscribe(item=>{
      console.log(item)
    })
  }

}
