import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreventaComponent } from './components/preventa/preventa.component';

const routes: Routes = [
  {path: 'preventa', component: PreventaComponent},
  { path: '**', redirectTo: '/preventa', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
