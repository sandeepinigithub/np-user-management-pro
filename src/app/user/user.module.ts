import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserPageComponent } from './user-page/user-page.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

import { ProfileComponent } from './profile/profile.component';
import { LeavePageComponent } from './leave-page/leave-page.component';
import { SettingsComponent } from './settings/settings.component';
import { AccountsComponent } from './accounts/accounts.component';
import { OnlineStatusComponent } from './online-status/online-status.component';


@NgModule({
  declarations: [
    UserComponent,
    UserPageComponent,
    ProfileComponent,
    LeavePageComponent,
    SettingsComponent,
    AccountsComponent,
    OnlineStatusComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ]
})
export class UserModule { }
