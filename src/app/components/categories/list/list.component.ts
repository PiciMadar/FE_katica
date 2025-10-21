import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { Category  } from '../../../interfaces/category';
import { ApiService } from '../../../services/api.service';
import { apiRES } from '../../../interfaces/apiRES';





@Component({
  selector: 'app-catform',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class CListComponent  implements OnInit {


  constructor(private api:ApiService)
  {

  }
  categories: Category[] = [];

  async ngOnInit(){
    this.getAllCategories()
  }
  getAllCategories(){
    this.api.selectAll('categories').then((res:apiRES) =>{
      if(res.status == 200){
        this.categories = res.data;
    }
    else{
      alert(res.message)
    }
    })
  }

    delete(id:number){
      if(window.confirm("Biztosan törölni szeretnéd ezt a kategóriát?")){
        this.api.delete('categories', id).then((res:apiRES) =>{
          if(res.status == 200){
            alert(res.message);
            this.getAllCategories()
          }
          else
          {
            alert(res.message)
          }
        })
      }
    }
}
