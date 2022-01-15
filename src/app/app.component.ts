import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'StatusApp';

  ngOnInit() {
    const date = new Date().toDateString();
    const storedDate = localStorage.getItem('Date')
    if(date != storedDate){
      localStorage.clear();
      localStorage.setItem('Date', date);
    }
  }
}
