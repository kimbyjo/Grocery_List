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
    console.log(this.groceryItem);
    this.groceryItems.push(this.groceryItem);
    console.log(this.groceryItems);
    this.groceryItem = " ";
  
   
    

  }

  constructor() { }

  ngOnInit() {
  }

}
