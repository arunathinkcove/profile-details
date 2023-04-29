import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ProfileComponent } from './profile/profile.component';
import { FirstProfileComponent } from './first-profile/first-profile.component';
import { SecondProfileComponent } from './second-profile/second-profile.component';
import { ThirdProfileComponent } from './third-profile/third-profile.component';
import { FourthProfileComponent } from './fourth-profile/fourth-profile.component';
import { FifthProfileComponent } from './fifth-profile/fifth-profile.component';
import { SixProfileComponent } from './six-profile/six-profile.component';
import { SevenProfileComponent } from './seven-profile/seven-profile.component';
import { UserDropdownComponent } from './user-dropdown/user-dropdown.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { EarningsComponent } from './earnings/earnings.component';
import { LearningComponent } from './learning/learning.component';
import { FollowersComponent } from './followers/followers.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    ProfileComponent,
    FirstProfileComponent,
    SecondProfileComponent,
    ThirdProfileComponent,
    FourthProfileComponent,
    FifthProfileComponent,
    SixProfileComponent,
    SevenProfileComponent,
    UserDropdownComponent,
    DashboardComponent,
    SettingsComponent,
    EarningsComponent,
    LearningComponent,
    FollowersComponent,
    NavigationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
