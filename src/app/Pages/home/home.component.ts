import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mini = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    if (this.mini) {
      document.getElementById("mySidebar").style.width = "18vw";
      document.getElementById("main").style.marginLeft = "18vw";
      document.getElementById("main").style.width = "82vw";
      this.mini = false;
    } else {
      document.getElementById("mySidebar").style.width = "6vw";
      document.getElementById("main").style.marginLeft = "6vw";
      this.mini = true;
    }
  }


}
