//import components here.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/search/sidebar/sidebar.component'
import { ResultListComponent } from './components/search/resultlist/resultlist.component';
import { ResultComponent } from './components/search/result/result.component';
import { MainComponent } from './components/search/main/main.component';
import { LoginWindow } from './components/header/login.component';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    ResultComponent,
    ResultListComponent,
    MainComponent,
    LoginWindow
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    BootstrapModalModule
    ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
      LoginWindow,
  ]
})
export class AppModule { }
