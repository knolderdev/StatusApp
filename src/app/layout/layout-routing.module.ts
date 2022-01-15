import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from "./pages/landing/landing.component";
import {StatusComponent} from "./pages/status/status.component";
import {DataViewComponent} from "./pages/data-view/data-view.component";
// import {DataViewComponent} from "./pages/data-view/data-view.component";

const routes: Routes = [
  {
    path: 'home',
    component: LandingComponent,
    children: [
      {path: '', component: StatusComponent},
      {path: 'dailyStatus', component: DataViewComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
