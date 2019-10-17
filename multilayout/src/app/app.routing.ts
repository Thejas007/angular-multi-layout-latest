import { ClrAppLayoutComponent } from './_layout/clr-app-layout/clr-app-layout.component';
import { IntelligenceInstancesComponent } from './intelligence-instances/intelligence-instances.component';
import { Routes, RouterModule } from '@angular/router';



import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';


import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginNewComponent } from './login-new/login-new.component';


const appRoutes: Routes = [

    //Site routes goes here
    {
        path: '',
        component: SiteLayoutComponent,
        children: [
          { path: '', component: HomeComponent, pathMatch: 'full'},
          { path: 'about', component: AboutComponent },
          { path: 'test/:id', component: AboutComponent }
        ]
    },

    // App routes goes here here
    {
        path: '',
        component: AppLayoutComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'profile', component: ProfileComponent },
          { path: 'intelligence-instances', component: IntelligenceInstancesComponent }
        ]
    },
// Clarity App routes goes here here
{
  path: '',
  component: ClrAppLayoutComponent,
  children: [
    { path: 'clr-dashboard', component: DashboardComponent },
    { path: 'clr-profile', component: ProfileComponent },
    { path: 'clr-intelligence-instances', component: IntelligenceInstancesComponent }
  ]
},
    //no layout routes
    { path: 'login', component: LoginComponent},
    { path: 'login-new', component: LoginNewComponent},
    { path: 'register', component: RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);


