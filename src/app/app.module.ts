//Setting route & import components here.
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

//Route
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    ResultComponent,
    ResultListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    //Setting Route Here
    RouterModule.forRoot([
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }

  /*,
  {
    path:'',
    component:''
  }
  */

  ])
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
