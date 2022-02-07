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
      value: "Skinny-Serta President's Day - VISA - GWP Promotion",
      viewValue: "Skinny-Serta President's Day - VISA - GWP Promotion"
    },
    {
      value: "Skinny-Serta Presidents Day Physical Classic Bundle GWP",
      viewValue: "Skinny-Serta Presidents Day Physical Classic Bundle GWP"
    },
    {value: "MucinexFastMax", viewValue: "MucinexFastMax"},
    {
      value: 'Skinny-Serta BeautyRest President\'s Day Bundle GWP',
      viewValue: 'Skinny-Serta BeautyRest President\'s Day Bundle GWP'
    },
    {
      value: 'Cossette',
      viewValue: 'Cossette'
    },
    {
      value: 'Universal',
      viewValue: 'Universal'
    },
    {
      value: 'Leap Vapor',
      viewValue: 'Leap Vapor'
    },
    {
      value: 'Toro',
      viewValue: 'Toro'
    },
    {
      value: 'Other',
      viewValue: 'Other'
    }
  ]

  public static readonly projectTypes: dropDown[] = [
    {value: "MICROSITE", viewValue: "Microsite"},
    {value: "PORTAL", viewValue: "Portal"},
    {value: "TECH-DEBT", viewValue: "Tech-Debt"},
    {value: "FANDANGO", viewValue: "Fandango"},
    {value: "Other", viewValue: "Other"},
  ]

  public static readonly projectStatusArray: dropDown[] = [
    {value: "IN PROGRESS", viewValue: "Progress"},
    {value: "READY FOR REVIEW", viewValue: "Review"},
    {value: "READY FOR TESTING", viewValue: "Testing"},
    {value: "READY FOR RELEASE", viewValue: "Release"},
    {value: "DEPLOYED", viewValue: "Deployed"},
    {value: "DONE", viewValue: "Done"},
  ]

  public static readonly studios: dropDown[] = [
    {value: 'FE', viewValue: 'Frontend'},
    {value: 'BE', viewValue: 'Backend'},
    {value: 'QA', viewValue: 'QA'},
    {value: 'DevOps', viewValue: 'DevOps'},
  ]

  /**
   * Data View component constants
   */
  public static readonly itemOne = 'Paired up with team members on various issues.';
  public static readonly itemTwo = "Reviewed multiple PR's"
}
