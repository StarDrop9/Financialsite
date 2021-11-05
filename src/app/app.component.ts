import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'financialsite';
  colorSmokeStatus: boolean= false; 
constructor() {this.colorSmokeStatus = Math.random() >.5 ? true : false;}


getSmokeColor() {
  return this.colorSmokeStatus ? 'grey' : 'yellow';
}

getCloudColor() {
  return this.colorSmokeStatus ? 'lightblue' : 'grey';
}


}
