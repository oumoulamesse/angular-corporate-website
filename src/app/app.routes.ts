import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { BlogComponent } from './pages/blog/blog.component';

export const routes: Routes = [
    { path:'', component:HomeComponent},
    { path:'', component:ContactComponent},
    { path:'', component:PricingComponent},
    { path:'', component:BlogComponent},
    
];
