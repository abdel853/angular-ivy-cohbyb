import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from '../components/firebase/sign-in/sign-in.component';
import { SignUpComponent } from '../components/firebase/sign-up/sign-up.component';
import { DashboardComponent } from '../components/firebase/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../components/firebase/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../components/firebase/verify-email/verify-email.component';
// route guard
import { AuthGuard } from '../components/firebase/shared/guard/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}