import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { Trafic } from '../../../interfaces/trafic';
import axios, { AxiosError } from 'axios';




@Component({
  selector: 'app-Tlist',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class TListComponent implements OnInit{
    trafics: Trafic[] = [];

    async ngOnInit(){
      try{
        const rsp = await axios.get('http://localhost:3000/trafics')
        this.trafics = rsp.data;
        console.log(this.trafics)
      }
      catch(err_){
        alert("Hiba: " + err_)
      }
    }
}
