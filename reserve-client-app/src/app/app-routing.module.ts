import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermComponent } from './term/term.component';
import { ServiceComponent } from './service/service.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [
{ path: '', redirectTo: '/service', pathMatch: 'full' },
{ path: 'service', component: ServiceComponent },
{ path: 'term', component: TermComponent },
{ path: 'confirmation', component: ConfirmationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
