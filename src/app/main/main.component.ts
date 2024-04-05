import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

 nav:string=''




  navigate(type:string){
      console.log(type)
      this.nav = type;
  }






  ngOnInit(): void {
  }

}
