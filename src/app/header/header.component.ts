import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  imgSrc = "../../assets/img/panda1.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
