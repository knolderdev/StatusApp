import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {dropDown} from "../../../core/models/status.model";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {AppConstants} from "../../../core/constants/app-constants";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})

export class StatusComponent implements OnInit {
  Data!: string;
  DataArray: string[] = [];
  ticketNumberArray: string[] = [];
  ticketNumber!: string;
  ticketTitle!: string;
  studio!: string;
  projectType!: string;
  project!: dropDown;
  projectStatus!: string;
  projects = AppConstants.projects;
  projectTypes = AppConstants.projectTypes;
  projectStatusArray = AppConstants.projectStatusArray;
  studios = AppConstants.studios;
  statusForm: FormGroup = this.formBuilder.group({
    ticket: ['', Validators.required],
    ticketTitle: ['', Validators.required],
    studio: ['', Validators.required],
    projectType: ['', Validators.required],
    project: ['', Validators.required],
    projectStatus: ['', Validators.required],
  });
  itemOne = 'Paired up with team members on various issues.';
  itemTwo = "Reviewed multiple PR's"

  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.setDataArray();
  }

  onSubmit() {
    if (this.statusForm.invalid) {
      this.toastr.error('Missing form fields');
      return
    }
    const ticketNumber = this.statusForm.controls['ticket'].value.split('/')[4]
    if (this.ticketNumberArray.includes(ticketNumber)) {
      this.toastr.error('We have the same ticket with ticket number ' + ticketNumber + ' in the list.');
      return
    } else {
      this.ticketNumber = '*' + ticketNumber + '*';
      this.ticketTitle = this.statusForm.controls['ticketTitle'].value;
      this.studio = this.statusForm.controls['studio'].value + '-';
      this.projectType = '[' + this.statusForm.controls['projectType'].value + '-';
      this.project = this.statusForm.controls['project'].value;
      this.projectStatus = '*[' + this.statusForm.controls['projectStatus'].value + ']*';
      this.Data = this.ticketNumber + ' ' + this.studio + this.projectType + this.project.value + ' ' + this.ticketTitle + ' ' + this.projectStatus;
      this.DataArray.push(this.Data);
      this.setLocalStorage();
      this.toastr.success('An item is added to the list');
      this.setDataArray();
    }
  }

  setLocalStorage() {
    localStorage.setItem('status', JSON.stringify(this.DataArray));
  }

  generateDailyStatus() {
    if (!this.DataArray.includes(this.itemTwo) || !this.DataArray.includes(this.itemTwo)) {
      this.DataArray.push(this.itemOne);
      this.DataArray.push(this.itemTwo);
      this.setLocalStorage();
    }
    if (this.DataArray.length != 0) {
      this.router.navigate(['/home/dailyStatus']);
    } else {
      this.toastr.error('There are no items in the list to generate status');
    }
  }


  setDataArray() {
    if (JSON.parse(<string>localStorage.getItem('status')) != null) {
      this.DataArray = JSON.parse(<string>localStorage.getItem('status'));
    }
    this.ticketNumberArray = [];
    this.DataArray.forEach((item: string) => {
      console.log('item is', item);
      if (item != this.itemOne && item != this.itemTwo) {
        const ticketNumber = item.substr(1, 8);
        console.log(ticketNumber, 'ticket number');
        this.ticketNumberArray.push(ticketNumber);
      }
    });
    console.log(this.ticketNumberArray.length, 'length is');
    console.log(this.ticketNumberArray, 'array');
  }

  DeleteItem(ticketNumber: string) {
    const tempArray = this.DataArray;
    this.DataArray = [];
    this.ticketNumberArray = [];
    tempArray.forEach((item: string) => {
      const number = item.substr(1, 8);
      if (number != ticketNumber) {
        this.DataArray.push(item);
        this.ticketNumberArray.push(number);
      }
    });
    this.setLocalStorage();
    this.toastr.success('Item with ticket number ' + ticketNumber + ' is Deleted successfully.');
  }

  editItem() {
    this.toastr.warning('We are working on this functionality. Please check back later');
  }
}
