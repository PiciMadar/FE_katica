import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { Trafic } from '../../../interfaces/trafic';
import { ApiService } from '../../../services/api.service';
import { apiRES } from '../../../interfaces/apiRES';




@Component({
  selector: 'app-Tlist',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class TListComponent{
  constructor(private api: ApiService){}
  
  trafics: Trafic[] = [];


 async ngOnInit(){
    this.getAllTrafics();
  }  
  getAllTrafics(){
    this.api.selectAll('trafics').then((res:apiRES) =>{
      if(res.status == 200){
          this.trafics = res.data;
      }
      else{
        alert(res.message)
      }
    });
  }
  delete(id:number){
    if(window.confirm("Biztosan törölni szeretnéd ezt a traficot?")){
      this.api.delete('trafics', id).then((res:apiRES) =>{
        if(res.status == 200){
          alert(res.message);
          this.getAllTrafics()
        }
        else
        {
          alert(res.message)
        }
      })
    }
  }



}
