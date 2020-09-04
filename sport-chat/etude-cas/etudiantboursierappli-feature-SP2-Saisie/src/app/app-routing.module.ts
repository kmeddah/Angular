import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaisieComponent } from './01-saisie/saisie.component';
import { RecapitulatifComponent } from './02-recapitulatif/recapitulatif.component';
import { FinComponent } from './03-fin/fin.component';

import { NoneligibiliteComponent } from './00-noneligibilite/noneligibilite.component';
import { ModalquitterComponent } from './04-modalquitter/modalquitter.component';

const routes: Routes = [
 
  { path: 'saisie/:index', component: SaisieComponent },
  { path: 'recapitulatif', component: RecapitulatifComponent },
  { path: 'fin', component: FinComponent },
  { path: 'nonEligibilite', component: NoneligibiliteComponent },
  { path: 'modalQuitter', component: ModalquitterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
