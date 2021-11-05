import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trianglespointer',
  templateUrl: './trianglespointer.component.svg',
  styleUrls: ['./trianglespointer.component.css']
})
export class TrianglespointerComponent implements OnInit {
 colorStatus = false;

  constructor() {
   this.colorStatus = Math.random() >.5 ? true : false;
   }

  ngOnInit(): void {

    }
    
    getColor() {
      return this.colorStatus ? 'red' : 'blue';
    }
    
    fillColor = 'rgb(255, 0, 0)';

    changeColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      this.fillColor = `rgb(${r}, ${g}, ${b})`;
    }

    changeColor2() {
      const colors = ['red', 'blue', 'green', 'orange', 'pink', 'purple']
          const rando = () => colors[Math.floor(Math.random() * colors.length)];
          document.documentElement.style.cssText = `
          --dark-color: ${rando()};
          --light-color: ${rando()};
          `
    }


  }






