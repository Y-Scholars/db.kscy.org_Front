import {Routes} from "@angular/router";
import {ResultComponent} from "./components/search/result/result.component";
import {ResultListComponent} from "./components/search/resultlist/resultlist.component";
import {SideBarComponent} from "./components/search/sidebar/sidebar.component";
import {MainComponent} from "./components/search/main/main.component";
import { SignUpComponent } from './components/user/signup/signup.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { MobileComponent } from './components/introduce/mobile.component';
import { SearchComponent } from './components/search/search/search.component';
import { AuthGuard } from './components/service/auth-guard.service';
import { IntroComponent } from './components/introduce/intro.component';

export const router: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home', component: MainComponent
    },
    {
        path: 'search', component: SearchComponent
    },
    {
        path: 'signup', component: SignUpComponent
    },
    {
        path: 'introduce', component: IntroComponent
    },
    {
        path: 'profile', component: ProfileComponent,
        canActivate: [AuthGuard]
    }, {
        path: ':prefix', component  : ResultComponent,
        canActivate: [AuthGuard]
    }, {
        path: 'mobile', component : MobileComponent
    }
];
