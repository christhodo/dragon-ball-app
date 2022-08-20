import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaiyansComponent } from './saiyans/saiyans.component';

const routes: Routes = [
  { path: 'saiyans', component: SaiyansComponent },
  { path: '**', redirectTo: '/saiyans' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
