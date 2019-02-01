import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailsDisplayComponent } from './user-details-display/user-details-display.component';
import { TestliveComponent } from './testlive/testlive.component';
import { TestendComponent } from './testend/testend.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'user-details-display', component: UserDetailsDisplayComponent },
      { path: 'testlive', component: TestliveComponent },
      { path: 'testend', component: TestendComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
