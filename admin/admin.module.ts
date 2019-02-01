import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailsDisplayComponent } from './user-details-display/user-details-display.component';
import { TestliveComponent } from './testlive/testlive.component';
import { TestendComponent } from './testend/testend.component';

@NgModule({
  declarations: [
    DashboardComponent,
    UserDetailsDisplayComponent,
    TestliveComponent,
    TestendComponent
  ],
  imports: [CommonModule, AdminRoutingModule]
})
export class AdminModule {}
