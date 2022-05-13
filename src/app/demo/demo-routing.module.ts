import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [  
  {path:'demo',children:[
  {path:'help',component:HelpComponent},
  {path:'logout',component:LogoutComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
