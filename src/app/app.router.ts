import {Routes} from "@angular/router";
import {ResultComponent} from "./components/search/result/result.component";
import {ResultListComponent} from "./components/search/resultlist/resultlist.component";
import {SideBarComponent} from "./components/search/sidebar/sidebar.component";

export const router: Routes = [
  {
    path: '', redirectTo: '/posts', pathMatch: 'full'
  },
  {
    path:'', component: ResultComponent
  },
  {
    path:'posts/my', component: ResultListComponent
  },
  {
    path:'posts/:key', component: SideBarComponent
  },
  {
    path:'posts/write/:key',
  }
];