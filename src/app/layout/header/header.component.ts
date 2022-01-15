import { Component, OnInit } from '@angular/core';
import {AppConstants} from "../../core/constants/app-constants";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logo = AppConstants.mainLogo;

  constructor() { }

  ngOnInit(): void {
  }

}
