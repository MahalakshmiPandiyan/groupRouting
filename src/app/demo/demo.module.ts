import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { HelpComponent } from './help/help.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    HelpComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
