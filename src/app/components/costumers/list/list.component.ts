import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { Vevo } from '../../../interfaces/vevo';
import { apiRES } from '../../../interfaces/apiRES';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class CosListComponent {
  constructor(private api: ApiService){}
  
  Customers: Vevo[] = [];


 async ngOnInit(){
    this.getAllCustomers();
  }  
  getAllCustomers(){
    this.api.selectAll('costumer').then((res:apiRES) =>{
      if(res.status == 200){
          this.Customers = res.data;
      }
      else{
        alert(res.message)
      }
    });
  }
  delete(id:number){
    if(window.confirm("Biztosan törölni szeretnéd ezt a vevőt?")){
      this.api.delete('costumer', id).then((res:apiRES) =>{
        if(res.status == 200){
          alert(res.message);
          this.getAllCustomers()
        }
        else
        {
          alert(res.message)
        }
      })
    }
  }


}
