import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {dropDown} from "../../../core/models/status.model";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {AppConstants} from "../../../core/constants/app-constants";
import {StorageService} from "../../../core/services/storage.service";
import {MatRadioChange} from "@angular/material/radio";

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
  workDesc!: string;
  studio!: string;
  projectType!: string;
  project!: dropDown;
  projectStatus!: string;
  projects = AppConstants.projects;
  projectTypes = AppConstants.projectTypes;
  projectStatusArray = AppConstants.projectStatusArray;
  studios = AppConstants.studios;
  displayError = false;
  addInputFieldProject = false;
  addInputFieldType = false;
  statusForm!: FormGroup;
  items!: FormArray;
  @ViewChild('workDesc') workDescTemplate!: ElementRef;

  constructor(private formBuilder: FormBuilder,
              private toast: ToastrService,
              private router: Router,
              private storageService: StorageService) {
  }

  ngOnInit(): void {
    this.statusForm = this.formBuilder.group({
      ticket: ['', Validators.required],
      ticketTitle: ['', Validators.required],
      workDesc: [''],
      studio: ['', Validators.required],
      projectType: ['', Validators.required],
      project: ['', Validators.required],
      projectStatus: ['', Validators.required],
      items: this.formBuilder.array([])
    });
    this.setDataArray();
  }

  onSubmit() {
    if (this.statusForm.invalid) {
      this.displayError = true
      this.toast.error('Missing form fields');
      return;
    }
    const ticketNumber = this.statusForm.controls['ticket'].value.split('/')[4]
    if (this.ticketNumberArray.includes(ticketNumber)) {
      this.toast.error('We have the same ticket with ticket number ' + ticketNumber + ' in the list.');
      return
    } else {
      this.ticketNumber = '*' + ticketNumber + '*';
      this.ticketTitle = this.statusForm.controls['ticketTitle'].value;
      this.workDesc = this.statusForm.controls['workDesc'].value;
      this.studio = this.statusForm.controls['studio'].value + '-';
      this.projectType = '[' + this.statusForm.controls['projectType'].value + '-';
      this.project = this.statusForm.controls['project'].value;
      this.projectStatus = '*[' + this.statusForm.controls['projectStatus'].value + ']*';
      const descArray = this.workDesc.split('\n');
      this.Data = this.ticketNumber + ' ' + this.studio + this.projectType + this.project.value + ']' + ' ' + this.ticketTitle + ' ' + this.projectStatus
      ;
      if (descArray.length != 0) {
        descArray.forEach((desc) => {
          this.Data = this.Data + '<br>&nbsp;&nbsp;&nbsp;&nbsp;' + '- ' + desc
        });
      }
      this.DataArray.push(this.Data);
      this.setLocalStorage();
      this.toast.success('An item is added to the list');
      this.setDataArray();
    }
  }

  setLocalStorage() {
    this.storageService.setItemToLocalStorage(this.DataArray);
  }

  generateDailyStatus() {
    if (this.DataArray.length != 0) {
      this.router.navigate(['/home/dailyStatus']).then();
    } else {
      this.toast.error('There are no items in the list to generate status');
    }
  }

  setDataArray() {
    const ParseArray = JSON.parse(String(this.storageService.getItemFromLocalStorage('status')));
    if (ParseArray) {
      this.DataArray = ParseArray;
      this.ticketNumberArray = [];
      this.DataArray.forEach((item: string) => {
        const ticketNumber = item.substr(1, 8);
        this.ticketNumberArray.push(ticketNumber);
      });
    }
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
    this.toast.success('Item with ticket number ' + ticketNumber + ' is Deleted successfully.');
  }

  editItem() {
    this.toast.warning('We are working on this functionality. Please check back later');
  }

  radioValueChange(e: any) {
    console.log('e===========>', e);
    console.log('e.source.value.value===========>', e.source.value.value);
    console.log('e===========>', e);
    if (e.source.value.value === 'Other') {
      this.addInputFieldProject = true
      this.addItem('ProjectNameInput')
    }
    if (e.value === 'Other') {
      this.addInputFieldType = true;
      this.addItem('ProjectTypeInput')
    }

    console.log('New status form arrya is', this.statusForm)
  }

  deleteAll() {
    this.ticketNumberArray = [];
    this.DataArray = [];
    this.storageService.clearLocalStorage();
    this.toast.success('Successfully deleted all the items from the list');
  }

  createItem(item?: string): FormControl {
    return this.formBuilder.control({
      item: ''
    });
  }

  addItem(name: string): void {
  }
}
