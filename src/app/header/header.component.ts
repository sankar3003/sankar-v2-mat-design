import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

@Output() togglSideBarforme : EventEmitter<any> = new  EventEmitter();

showFiller:false;
  constructor() { }

  ngOnInit(): void {
  }

  toolbar:any={
    bg:true
  }

togglesideBar(){
  this.togglSideBarforme.emit()
}

}
