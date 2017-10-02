import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  container : any;

  // Multi-platform browser scroll
  constructor(){
    console.log(this.container);
  }

}
