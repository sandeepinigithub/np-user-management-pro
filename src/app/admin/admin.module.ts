import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { UserFilterPipe } from './pipes/user-filter.pipe';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

import { ProjectsComponent } from './projects/projects.component';
import { CalenderComponent } from './calender/calender.component';
import { SettingsComponent } from './settings/settings.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminPageComponent,
    FeedbacksComponent,
    UserFilterPipe,
    ProjectsComponent,
    CalenderComponent,
    SettingsComponent,
    AccountsComponent,
    ViewUserComponent,
    AddUserComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule
    
  ]
})
export class AdminModule { }
