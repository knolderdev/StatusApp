import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ClipboardService} from "ngx-clipboard";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss']
})
export class DataViewComponent implements OnInit, AfterViewInit {
  date!: string;
  dataArray: string[] = [];
  dailyStatus!: string;
  @ViewChild('status') template!: ElementRef;

  constructor(private clipBoard: ClipboardService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    const storedDate = localStorage.getItem('Date');
    if(storedDate != null){
      this.date = '*' + storedDate.substr(4, 6) + ',' + storedDate.substr(10,) + '*';
    }
    this.dataArray = JSON.parse(<string>localStorage.getItem('status'));
  }

  copyToClipBoard(){
    this.clipBoard.copy(this.dailyStatus);
    this.toastr.success('Copied to Clipboard');
  }

  ngAfterViewInit() {
    this.dailyStatus = this.template.nativeElement.innerText;
  }
}
