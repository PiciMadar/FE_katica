import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Category } from '../../../interfaces/category';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';
import { apiRES } from '../../../interfaces/apiRES';

@Component({
  selector: 'app-Catform',
  standalone: true,
  imports: [RouterModule, FormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})


export class CatFormComponent implements OnInit{

  id:number | undefined = undefined; //union
  
  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log('ID: ' + this.id)
    if(this.id){
      this.api.select('categories', this.id).then((res:apiRES) =>{
        this.newCategory = res.data[0]
      })
    }
    this.getAllCategories();
  }
  allCategories: Category[] = [];





  newCategory: Category = {
    id:0,
    kategoriaNev: ""
  }

  getAllCategories(){
    this.api.selectAll('categories').then((res: apiRES) =>{
      this.allCategories = res.data;
    })
  }
  save(){
    if(this.newCategory.kategoriaNev == ""){
      alert("Adj meg egy nevet előszőr")
      return
    }
    let idx = this.allCategories.findIndex(item => item.kategoriaNev.toLowerCase() == this.newCategory.kategoriaNev.toLowerCase() && item.id !=this.newCategory.id)
    if(idx > -1){
      alert("Már van ilyen kategória a listában")
      return
    }
    if(!this.id){
      this.api.insert('categories', this.newCategory).then((res:apiRES) =>{
        console.log(res)
        this.newCategory = {
          id: 0,
          kategoriaNev: ''
        }
        this.getAllCategories();
      })
    }
    else{
      this.api.update('categories', this.id, this.newCategory).then((res:apiRES) =>{
        if(res.status == 200){
          this.router.navigate(['/categories']);
        }
        else{
          alert(res.message)
        }
      }) 
    }

  }
}
