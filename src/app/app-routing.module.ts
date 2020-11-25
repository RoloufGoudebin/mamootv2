import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { ValeursComponent } from './valeurs/valeurs.component';
import { EnvironnementComponent } from './environnement/environnement.component';


const routes: Routes = [
  { path: 'solutions', component: SolutionsComponent},
  { path: 'valeurs', component: ValeursComponent},
  { path: 'environnement', component: EnvironnementComponent},
  { path: '', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
