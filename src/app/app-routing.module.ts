import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { NetworkComponent } from './network/network/network.component';
import { FriendsListComponent } from './friends/friends-list/friends-list.component';
import { SettingsComponent } from './settings/settings/settings.component';
import { UsersListComponent } from './admin/users-list/users-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'network', component: NetworkComponent },
  { path: 'friends', component: FriendsListComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'admin/users', component: UsersListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
