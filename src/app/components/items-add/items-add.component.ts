import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items-add',
  templateUrl: './items-add.component.html',
  styleUrls: ['./items-add.component.css']
})
export class ItemsAddComponent implements OnInit {
  addItem = new FormGroup({
    item_name: new FormControl(),
    cost: new FormControl(),
    quantity: new FormControl(),
  })
  constructor(private itemsService:ItemsService, private navRouter: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.itemsService.createItem(this.addItem.value).subscribe({
      next:(res) =>{
        alert('Item added successfully');
        this.navRouter.navigate(['/all-items'])
      }
    })
  }
}
