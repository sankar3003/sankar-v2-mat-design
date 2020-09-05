import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sankar-v2';
  constructor(){

  }
  ngOnInit(): any {
    var x = 32222.123;
    const int_part = Math.trunc(x); // returns 3

    console.log(int_part)
    //console.log(float_part)
    var nstring = (x + ""),
    narray  = nstring.split("."),
    result  = "" + ( narray.length > 1 ? narray[1] : "0" );
console.log(result)

  }


}
