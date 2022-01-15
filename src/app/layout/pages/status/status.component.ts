import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {dropDown} from "../../../core/models/status.model";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})

export class StatusComponent implements OnInit {
  generateAllowed = false;
  Data!: string;
  DataArray: string[] = [];
  ticketNumber!: string;
  ticketTitle!: string;
  studio!: string;
  projectType!: string;
  project!: dropDown;
  projectStatus!: string;
  projects: dropDown[] = [
    {
      value: "Skinny-Serta President's Day - VISA - GWP Promotion]",
      viewValue: "Skinny-Serta President's Day - VISA - GWP Promotion"
    },
    {value: "MucinexFastMax]", viewValue: "MucinexFastMax"},
  ]

  projectTypes: dropDown[] = [
    {value: "MICROSITE", viewValue: "Microsite"},
    {value: "PORTAL", viewValue: "Portal"},
  ]

  projectStatusArray: dropDown[] = [
    {value: "IN PROGRESS", viewValue: "Progress"},
    {value: "READY FOR REVIEW", viewValue: "Review"},
    {value: "READY FOR TESTING", viewValue: "Testing"},
    {value: "DEPLOYED", viewValue: "Deployed"},
    {value: "DONE", viewValue: "Done"},
  ]

  studios: dropDown[] = [
    {value: 'FE', viewValue: 'Frontend'},
    {value: 'BE', viewValue: 'Backend'},
  ]
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
    if (JSON.parse(<string>localStorage.getItem('status')) != null) {
      this.DataArray = JSON.parse(<string>localStorage.getItem('status'));
      this.generateAllowed = true;
    }
  }

  onSubmit() {
    if(this.statusForm.invalid){
      this.toastr.error('Missing form fields');
      return
    }
    this.ticketNumber = '*' + this.statusForm.controls['ticket'].value.split('/')[4] + '*';
    this.ticketTitle = this.statusForm.controls['ticketTitle'].value;
    this.studio = this.statusForm.controls['studio'].value + '-';
    this.projectType = '[' + this.statusForm.controls['projectType'].value + '-';
    this.project = this.statusForm.controls['project'].value;
    this.projectStatus = '*[' + this.statusForm.controls['projectStatus'].value + ']*';
    this.Data = this.ticketNumber + ' ' + this.studio + this.projectType + this.project.value + ' ' + this.ticketTitle + ' ' + this.projectStatus;
    if (this.DataArray.includes(this.Data)) {
      this.toastr.error('We already have this item in our list');
    } else {
      this.DataArray.push(this.Data);
      localStorage.setItem('status', JSON.stringify(this.DataArray));
      this.toastr.success('An item is added to the list');
    }
  }

  generateDailyStatus(){
    this.router.navigate(['/home/dailyStatus'])
  }

}
