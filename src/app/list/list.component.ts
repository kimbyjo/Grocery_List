import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  groceryItem: string = " ";
  groceryItems: Object[] = [];
  

  addItem(){
    this.groceryItems.push(this.groceryItem);
    this.groceryItem = " ";   

  }

  clearItems(){
    this.groceryItems.length = 0;
    console.log(this.groceryItems);
    this.groceryItem = " "; 

  }

  constructor() { }

  ngOnInit() {
  }

}
