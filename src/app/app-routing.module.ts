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

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'post', component: PostComponent },

  { path: 'admin', component: AdminComponent },
  { path: 'addIllness', component: AddIllnessInfoComponent },
  { path: 'addDrugInfo', component: AddDrugInfoComponent },
  { path: 'listIllnesses', component: IllnessInfoComponent },
  { path: 'listDrugs', component: DrugsInfoComponent },
  { path: 'reply', component: ReplyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
