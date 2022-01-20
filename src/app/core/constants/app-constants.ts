import {Injectable} from "@angular/core";
import {dropDown} from "../models/status.model";

@Injectable()
export class AppConstants {
  /**
   * Image based assets
   */
  public static readonly mainLogo = 'assets/images/logo/logo.png';

  /**
   * Status form Data
   */
  public static readonly projects: dropDown[] = [
    {
      value: "Skinny-Serta President's Day - VISA - GWP Promotion]",
      viewValue: "Skinny-Serta President's Day - VISA - GWP Promotion"
    },
    {
      value: "Skinny-Serta Presidents Day Physical Classic Bundle GWP]",
      viewValue: "Skinny-Serta Presidents Day Physical Classic Bundle GWP"
    },
    {value: "MucinexFastMax]", viewValue: "MucinexFastMax"},
    {
      value: 'Skinny-Serta BeautyRest President\'s Day Bundle GWP]',
      viewValue: 'Skinny-Serta BeautyRest President\'s Day Bundle GWP'
    },
    {
      value: 'Cossette]',
      viewValue: 'Cossette'
    },
    {
      value: 'Universal]',
      viewValue: 'Universal'
    },
  ]

  public static readonly projectTypes: dropDown[] = [
    {value: "MICROSITE", viewValue: "Microsite"},
    {value: "PORTAL", viewValue: "Portal"},
  ]

  public static readonly projectStatusArray: dropDown[] = [
    {value: "IN PROGRESS", viewValue: "Progress"},
    {value: "READY FOR REVIEW", viewValue: "Review"},
    {value: "READY FOR TESTING", viewValue: "Testing"},
    {value: "DEPLOYED", viewValue: "Deployed"},
    {value: "DONE", viewValue: "Done"},
  ]

  public static readonly studios: dropDown[] = [
    {value: 'FE', viewValue: 'Frontend'},
    {value: 'BE', viewValue: 'Backend'},
    {value: 'QA', viewValue: 'Frontend'},
    {value: 'DevOps', viewValue: 'DevOps'},
  ]
}
