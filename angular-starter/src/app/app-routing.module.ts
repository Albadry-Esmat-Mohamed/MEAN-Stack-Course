import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenents/home/home.component';
import { AboutComponent } from './componenents/about/about.component';
import { ContactComponent } from './componenents/contact/contact.component'; 
import { SamplepostComponent } from './componenents/samplepost/samplepost.component';
//routes==> is array to define routes of module{app}
//each modul has its own routing-module  
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"samplepost",component:SamplepostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
