//import components here.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Router, RouterModule} from "@angular/router";
import {router} from "./app.router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/search/sidebar/sidebar.component'
import { ResultListComponent } from './components/search/resultlist/resultlist.component';
import { ResultComponent } from './components/search/result/result.component';
import { MainComponent } from './components/search/main/main.component';
import { SignUpComponent } from './components/user/signup/signup.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { LoginWindow } from './components/header/login.component';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { SignupService } from './components/service/signupService';
import { SearchService } from './components/service/search.service';
import { AuthGuard } from './components/service/auth-guard.service';
import { AuthService } from './components/service/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    ResultComponent,
    ResultListComponent,
    MainComponent,
    SignUpComponent,
    ProfileComponent,
    LoginWindow
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    RouterModule.forRoot(router)
    ],
  providers: [SearchService,AuthService,AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [
      LoginWindow,
  ]
})
export class AppModule { }
