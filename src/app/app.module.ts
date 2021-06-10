import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { AddIllnessInfoComponent } from './add-illness-info/add-illness-info.component';
import { AddDrugInfoComponent } from './add-drug-info/add-drug-info.component';
import { IllnessInfoComponent } from './illness-info/illness-info.component';
import { DrugsInfoComponent } from './drugs-info/drugs-info.component';
import { SearchComponent } from './search/search.component';
import { PostComponent } from './post/post.component';
import { ReplyComponent } from './reply/reply.component';
import { SearchDrugComponent } from './search-drug/search-drug.component';
import { ViewIllnessComponent } from './view-illness/view-illness.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    AdminComponent,
    AddIllnessInfoComponent,
    AddDrugInfoComponent,
    IllnessInfoComponent,
    DrugsInfoComponent,
    SearchComponent,
    PostComponent,
    ReplyComponent,
    SearchDrugComponent,
    ViewIllnessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
