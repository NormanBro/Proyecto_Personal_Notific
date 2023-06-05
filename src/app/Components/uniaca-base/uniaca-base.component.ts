import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UniAcademicaService } from 'src/app/Service/uni-academica.service';


@Component({
  selector: 'app-uniaca-base',
  templateUrl: './uniaca-base.component.html',
  styleUrls: ['./uniaca-base.component.css']
})
export class UniacaBaseComponent {
  UnidadAcademic:any={};

  constructor(
    private uniaca:UniAcademicaService,
    private router:Router,
    private local:Location
    
  ){
    this.uniaca.GetAllUnidadAcademic().subscribe(uni=>{
      this.UnidadAcademic=uni;
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
