//Setting route & import components here.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

//Route
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
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
