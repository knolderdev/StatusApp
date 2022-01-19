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
    console.log('this.DataArray.length', this.DataArray.length);
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
      const ticketNumber = item.substr(1, 8);
      this.ticketNumberArray.push(ticketNumber);
    })
  }

  DeleteItem(ticketNumber: string) {
    console.log('number', ticketNumber);
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
  }
}
