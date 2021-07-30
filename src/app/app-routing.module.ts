import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddIllnessInfoComponent } from './add-illness-info/add-illness-info.component';
import { AddDrugInfoComponent } from './add-drug-info/add-drug-info.component';
import { IllnessInfoComponent } from './illness-info/illness-info.component';
import { DrugsInfoComponent } from './drugs-info/drugs-info.component';
import { SearchComponent } from './search/search.component';
import { PostComponent } from './post/post.component';
import { ReplyComponent } from './reply/reply.component';
import { ViewIllnessComponent } from './view-illness/view-illness.component';
import { ViewDrugComponent } from './view-drug/view-drug.component';
import { SearchDrugComponent } from './search-drug/search-drug.component';
import { PostViewComponent } from './post-view/post-view.component';
import { PostReplyComponent } from './post-reply/post-reply.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'update_profile', component: UpdateProfileComponent },

  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'searchDrug', component: SearchDrugComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'post_reply/:id', component: PostReplyComponent },

  { path: 'admin', component: AdminComponent },
  { path: 'addIllness', component: AddIllnessInfoComponent },
  { path: 'addDrugInfo', component: AddDrugInfoComponent },
  { path: 'listIllnesses', component: IllnessInfoComponent },
  { path: 'viewIllness/:id', component: ViewIllnessComponent },

  { path: 'listDrugs', component: DrugsInfoComponent },
  { path: 'viewDrug/:id', component: ViewDrugComponent },
  { path: 'reply', component: ReplyComponent },
  { path: 'postView', component: PostViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
