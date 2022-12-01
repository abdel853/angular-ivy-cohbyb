import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';

import { AuthService } from "./components/firebase/shared/services/auth.service";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartDisplayItemComponent } from './components/cart-display-item/cart-display-item.component';
import { RenderCartDisplayComponent } from './components/render-cart-display/render-cart-display.component';
import { SignInComponent } from './components/firebase/sign-in/sign-in.component';
import { environment } from 'src/assets/environments/environment';
import { AppRoutingModule } from './components/app-routing.module';
import { DashboardComponent } from './components/firebase/dashboard/dashboard.component';
import { SignUpComponent } from './components/firebase/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/firebase/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/firebase/verify-email/verify-email.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'home'},
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'signin', component: SignInComponent },
      { path: 'signup', component: SignUpComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'displaycart', component: CartDisplayItemComponent },
      { path: 'verifyemail', component: VerifyEmailComponent },
      { path: 'forgotpassword', component: ForgotPasswordComponent },
      { path: 'page-not-found', component: PageNotFoundComponent },
      { path: '**', redirectTo: 'page-not-found'},
    ]),
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  declarations: [
    AppComponent, 
    RenderCartDisplayComponent,
    CartDisplayItemComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
