import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpregComponent } from './empreg/empreg.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AddfriendComponent } from './addfriend/addfriend.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Navbar2Component } from './navbar2/navbar2.component';
import { HttpClientModule} from '@angular/common/http';
import { Navbar3Component } from './navbar3/navbar3.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { ViewfriendComponent } from './viewfriend/viewfriend.component';
const myRoute:Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"gallery",
    component:GalleryComponent
  },
  {
    path:"about",
    component:AboutComponent

  },
  {
    path:"contact",
    component:ContactComponent

  },
  {
    path:"admin",
    component:AdminloginComponent
  },
  {
    path:"employee",
    component:EmployeeComponent
  },
  {
    path:"empreg",
    component:EmpregComponent
  },
  {
    path:"addcourse",
    component:AddcourseComponent
  },
  {
    path:"addfriend",
    component:AddfriendComponent
  },
  {
    path:"navbar2",
    component:Navbar2Component
  },
  {
    path:"navbar3",
    component:Navbar3Component
  },
  {
    path:"viewcourse",
    component:ViewcourseComponent
  },
  {
    path:"viewfriend",
    component:ViewfriendComponent

  }
  
]
@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent,
    ContactComponent,
    EmployeeComponent,
    EmpregComponent,
    AddcourseComponent,
    AddfriendComponent,
    Navbar1Component,
    Navbar2Component,
    Navbar3Component,
    ViewcourseComponent,
    ViewfriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
