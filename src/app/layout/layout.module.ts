import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutRoutingModule} from './layout-routing.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ContentContainerComponent} from './content-container/content-container.component';
import {LandingComponent} from './pages/landing/landing.component';
import {SharedModule} from "../shared/shared.module";
import {CoreModule} from "../core/core.module";
import {StatusComponent} from './pages/status/status.component';
import {DataViewComponent} from './pages/data-view/data-view.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentContainerComponent,
    LandingComponent,
    StatusComponent,
    DataViewComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    CoreModule,
  ]
})
export class LayoutModule {
}
