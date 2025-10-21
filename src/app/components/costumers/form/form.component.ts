import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { apiRES } from '../../../interfaces/apiRES';
import { Vevo } from '../../../interfaces/vevo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class CostumerComponent {
  vevoId:number | undefined = undefined; //union
  
  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}
  ngOnInit(): void {
    this.vevoId = this.activatedRoute.snapshot.params['vevoId'];
    console.log('ID: ' + this.vevoId)
    if(this.vevoId){
      this.api.select('costumers', this.vevoId).then((res:apiRES) =>{
        this.newCustomer = res.data[0]
      })
    }
    this.getAllCustomers();
  }
  allCustomers: Vevo[] = [];

  newCustomer: Vevo = {
    vevoID:0,
    vevoNev: ""
  }

  getAllCustomers(){
    this.api.selectAll('costumer').then((res: apiRES) =>{
      this.allCustomers = res.data;
    })
  }
  save(){
    if(this.newCustomer.vevoNev == ""){
      alert("Adj meg egy nevet előszőr")
      return
    }
    let idx = this.allCustomers.findIndex(item => item.vevoNev.toLowerCase() == this.newCustomer.vevoNev.toLowerCase() && item.vevoID !=this.newCustomer.vevoID)
    if(idx > -1){
      alert("Már van ilyen vevp a listában")
      return
    }
    if(!this.vevoId){
      this.api.insert('costumer', this.newCustomer).then((res:apiRES) =>{
        console.log(res)
        this.newCustomer = {
          vevoID: 0,
          vevoNev: ""
        }
        this.getAllCustomers();
      })
    }
    else{
      this.api.update('costumer', this.vevoId, this.newCustomer).then((res:apiRES) =>{
        if(res.status == 200){
          this.router.navigate(['/costumers']);
        }
        else{
          alert(res.message)
        }
      }) 
    }

  }
}
