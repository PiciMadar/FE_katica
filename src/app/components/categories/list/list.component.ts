import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { Category  } from '../../../interfaces/category';
import axios, { AxiosError } from 'axios';





@Component({
  selector: 'app-catform',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class CListComponent  implements OnInit {
  categories: Category[] = [];

  async ngOnInit(){
    try{
      const rsp = await axios.get('http://localhost:3000/categories')
      this.categories = rsp.data;
      console.log(this.categories)
    }
    catch(err_){
      alert("Hiba: " + err_)
    }
  }

}
