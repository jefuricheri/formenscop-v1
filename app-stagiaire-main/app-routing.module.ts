import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { PlanningComponent } from './planning/planning.component';
import { OffreComponent } from './offre/offre.component';
import { ModuleComponent } from './module/module.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent},
  { path: 'stagiaire', component: StagiaireComponent },
  { path: 'planning', component: PlanningComponent },
  { path: 'offre', component: OffreComponent},
  { path: 'module', component: ModuleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
