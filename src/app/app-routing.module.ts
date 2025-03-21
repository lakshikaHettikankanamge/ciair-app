import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PeopleComponent } from './Components/people/people.component';
import { AboutComponent } from './Components/about/about.component';
import { ResearchComponent } from './Components/research/research.component';


const routes: Routes = [
  {
     path: '', 
     component: HomeComponent 
  },
  {
    path: 'Home', 
    component: HomeComponent 
 },
  {
    path: 'People', 
    component: PeopleComponent 
 },
 {
   path: 'About', 
   component: AboutComponent 
 },
 {
  path: 'Research', 
  component: ResearchComponent 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
