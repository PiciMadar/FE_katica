import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { Product } from '../../../interfaces/product';
import { apiRES } from '../../../interfaces/apiRES';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ProListComponent {
  constructor(private api: ApiService){}
  
  Products: Product[] = [];


 async ngOnInit(){
    this.getAllProducts();
  }  
  getAllProducts(){
    this.api.selectAll('products').then((res:apiRES) =>{
      if(res.status == 200){
          this.Products = res.data;
      }
      else{
        alert(res.message)
      }
    });
  }
  delete(id:number){
    if(window.confirm("Biztosan törölni szeretnéd ezt a productot?")){
      this.api.delete('products', id).then((res:apiRES) =>{
        if(res.status == 200){
          alert(res.message);
          this.getAllProducts()
        }
        else
        {
          alert(res.message)
        }
      })
    }
  }



}
