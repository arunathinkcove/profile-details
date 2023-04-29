import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { EarningsComponent } from './earnings/earnings.component';
import { SettingsComponent } from './settings/settings.component';
import { LearningComponent } from './learning/learning.component';
import { FollowersComponent } from './followers/followers.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  { path: '', component: NavigationComponent },

  { path: 'card', component: ProfileCardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'firstprofile', component: FirstProfileComponent },
  { path: 'secondprofile', component: SecondProfileComponent },
  { path: 'thirdprofile', component: ThirdProfileComponent },
  { path: 'fourthprofile', component: FourthProfileComponent },
  { path: 'fifthprofile', component: FifthProfileComponent },
  { path: 'sixprofile', component: SixProfileComponent },
  {
    path: 'sevenprofile', component: SevenProfileComponent
  },
  { path: 'user', component: UserDropdownComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'earnings', component: EarningsComponent },
  { path: 'learning', component: LearningComponent },
  { path: 'followers', component: FollowersComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
