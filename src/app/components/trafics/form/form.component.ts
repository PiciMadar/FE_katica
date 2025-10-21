import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Trafic } from '../../../interfaces/trafic';
import { apiRES } from '../../../interfaces/apiRES';
import { ApiService } from '../../../services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-traform',
  standalone: true,
  imports: [RouterModule,CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class TraFormComponent implements OnInit{
  id: number | undefined = undefined; //union

  constructor(
        private api: ApiService,
        private activatedRoute: ActivatedRoute,
        private router: Router
  ){}
  async ngOnInit(){
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log('ID: ' + this.id)
    if(this.id){
      this.api.select('trafics', this.id).then((res:apiRES) =>{
        this.newTrafic = res.data[0]
      })
    }
    this.getAllTrafics();
  }  
  allTrafics: Trafic[] = [];  

  newTrafic: Trafic = {
    id: 0,
    termek: "",
    vevo: "",
    kategoriaId: 0,
    egyseg: "",
    nettoar: 0,
    mennyiseg: 0,
    kiadva: false
  }
  getAllTrafics(){
    this.api.selectAll('trafics').then((res:apiRES) =>{
      if(res.status == 200){
          this.allTrafics = res.data;
      }
      else{
        alert(res.message)
      }
    });
  }

  save(){
    if(this.newTrafic.termek == " " || this.newTrafic.vevo == " " || this.newTrafic.kategoriaId < 0 || this.newTrafic.egyseg == " " || this.newTrafic.nettoar < 0 || this.newTrafic.mennyiseg < 0){
      alert("Nem adtál meg minden adatot!")
      return
    }

    let idx = this.allTrafics.findIndex(item => item.termek.toLowerCase() == this.newTrafic.termek.toLowerCase() && item.id !=this.newTrafic.id)
    if(idx > -1){
      alert("Már van ilyen termék a listában")
      return
    }

    if(!this.id){
      this.api.insert('trafics', this.newTrafic).then((res:apiRES) =>{
        console.log(res)
        this.newTrafic = {
          id: 0,
          termek: "",
          vevo: "",
          kategoriaId: 0,
          egyseg: "",
          nettoar: 0,
          mennyiseg: 0,
          kiadva: false
        }
        this.getAllTrafics();
      })
      
    }
    else{
      this.api.update('trafics', this.id, this.newTrafic).then((res:apiRES) =>{
        if(res.status == 200){
          this.router.navigate(['/trafics']);
        }
        else{
          alert(res.message)
        }
      }) 
    }
  }
}
