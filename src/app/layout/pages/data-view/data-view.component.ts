import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ClipboardService} from "ngx-clipboard";
import {ToastrService} from "ngx-toastr";
import {StorageService} from "../../../core/services/storage.service";
import {AppConstants} from "../../../core/constants/app-constants";

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss']
})
export class DataViewComponent implements OnInit, AfterViewInit {
  date!: string;
  dataArray: string[] = [];
  dailyStatus!: string;
  showCheckIcon = false;
  showLoader = false;
  @ViewChild('status') template!: ElementRef;

  constructor(private clipBoard: ClipboardService,
              private toast: ToastrService,
              private storageService: StorageService) {
  }

  ngOnInit(): void {
    const storedDate = this.storageService.getItemFromLocalStorage('Date');
    if (storedDate != null) {
      this.date = '*' + storedDate.substr(4, 6) + ',' + storedDate.substr(10,) + '*';
    }
    this.dataArray = JSON.parse(<string>localStorage.getItem('status'));
    this.dataArray.push(AppConstants.itemOne);
    this.dataArray.push(AppConstants.itemTwo);
  }

  copyToClipBoard() {
    this.showLoader = true;
    this.clipBoard.copy(this.dailyStatus);
    setTimeout(() => {
      this.showCheckIcon = true;
      this.showLoader = false;
      this.toast.success('Copied to Clipboard');
    }, 500)
  }

  ngAfterViewInit() {
    this.dailyStatus = this.template.nativeElement.innerText;
  }
}
