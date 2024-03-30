import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  searchTerm:any;
  constructor() {} 

  handleInput(event:any){
    this.searchTerm = event.detail.value;
  }

}
