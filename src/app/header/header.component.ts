import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() navigation = new EventEmitter<string>();
  constructor() {}
  type:string='';
  ngOnInit(): void {}

  nav(type: string) {
    this.navigation.emit(type);
    this.type = type;
  }
}
