import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WizardStepperComponent } from '@wizard/stepper/wizard-stepper.component';

const routes: Routes = [
  {
    path: '',
    component: WizardStepperComponent
  },
  { path: '**', redirectTo: 'exception/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
