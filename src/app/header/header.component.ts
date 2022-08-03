import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }

  public loadScript() {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = 'assets/nav.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
}

myFunction() {
  var x = document.getElementById("myTopnav");
  if (x?.className === "topnav") {
    x.className += " responsive";
  } else {
    x!.className = "topnav";
  }

  
}

  navi(){

    this.loadScript();
    

  }

}
