import { NgModule } from '@angular/core';
import { StepPageWrapperComponent } from './stepper/step-page-wrapper/step-page-wrapper.component';
import { PageDirective } from './page-directive/page.directive';
import { StepComponentBase } from './stepper/step-component-base/step-component-base';
import { StepPagesService } from './services/step-pages.service';
import { WizardStepperComponent } from './stepper/wizard-stepper.component';
import { StepperButtonsComponent } from './stepper/stepper-buttons/stepper-buttons.component';
import { SharedModule } from '@shared/shared.module';

export const COMPONENTS = [WizardStepperComponent, StepPageWrapperComponent, StepperButtonsComponent, StepComponentBase];
export const DIRECTIVES = [PageDirective];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [SharedModule],
  exports: [...COMPONENTS, ...DIRECTIVES],
  providers: [StepPagesService]
})
export class WizardModule { }