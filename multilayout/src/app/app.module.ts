import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AppHeaderComponent } from './_layout/app-header/app-header.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { SiteFooterComponent } from './_layout/site-footer/site-footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

import { routing } from './app.routing';

import { ClarityModule } from '@clr/angular';

import { LoginNewComponent } from './login-new/login-new.component';
import { IntelligenceInstancesComponent } from './intelligence-instances/intelligence-instances.component';
import { ClrAppHeaderComponent } from './_layout/clr-app-header/clr-app-header.component';
import { ClrAppLayoutComponent } from './_layout/clr-app-layout/clr-app-layout.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, routing, ClarityModule ],
  declarations: [ AppComponent, HelloComponent, AppLayoutComponent, SiteLayoutComponent, AppHeaderComponent, SiteHeaderComponent, SiteFooterComponent, LoginComponent, DashboardComponent, HomeComponent, AboutComponent, RegisterComponent, ProfileComponent, LoginNewComponent, IntelligenceInstancesComponent, ClrAppHeaderComponent, ClrAppLayoutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
