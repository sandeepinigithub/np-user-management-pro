import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { UserFilterPipe } from './pipes/user-filter.pipe';


@NgModule({
  declarations: [
    AdminComponent,
    AdminPageComponent,
    FeedbacksComponent,
    UserFilterPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
