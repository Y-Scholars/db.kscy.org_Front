import {Routes} from "@angular/router";
import {ResultComponent} from "./components/search/result/result.component";
import {ResultListComponent} from "./components/search/resultlist/resultlist.component";
import {SideBarComponent} from "./components/search/sidebar/sidebar.component";
import {MainComponent} from "./components/search/main/main.component";
import { SignUpComponent } from './components/user/signup/signup.component';
import { ProfileComponent } from './components/user/profile/profile.component';

export const router: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path:'home', component: MainComponent
  },
  {
    path:'search', component: SideBarComponent
  },
  {
    path:'signup', component : SignUpComponent
  },
  {
    path:'profile', component : ProfileComponent
  }

];
