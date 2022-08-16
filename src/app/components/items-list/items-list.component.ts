import { Item } from './../../services/interfaces/items.interface';
import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  items:Item[] = [];
  totalCost: any = 0;
  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.getAllItems();
  }

  getAllItems(){
    this.itemsService.getAllItems().subscribe({
      next:(res) => {
        console.log(res.data); 
        this.items = res.data;
        console.log(this.items);
        this.itemsService.getAllItems().subscribe(res => {
          for(let i = 0; i < res.data.length; i++){
           this.totalCost += res.data[i].cost
          }
       })   
      }
    })
  }
}
