import {Routes} from "@angular/router";
import {ResultComponent} from "./components/search/result/result.component";
import {ResultListComponent} from "./components/search/resultlist/resultlist.component";
import {SideBarComponent} from "./components/search/sidebar/sidebar.component";
import {MainComponent} from "./components/search/main/main.component";

export const router: Routes = [
  {
    path: '', redirectTo: '/posts', pathMatch: 'full'
  },
  {
    path:'posts', component: MainComponent
  },
  {
    path:'posts/my', component: SideBarComponent
  },
  {
    path:'posts/kk', component: SideBarComponent
  }
];