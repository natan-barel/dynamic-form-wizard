import { NgModule } from '@angular/core';
import { FirstStepComponent } from './first-step/first-step.component';
import { WizardModule } from "@wizard/wizard.module";
import { SecondStepComponent } from './second-step/second-step.component';
import { ThirdStepComponent } from './third-step/third-step.component';

export const COMPONENTS = [FirstStepComponent, SecondStepComponent, ThirdStepComponent];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [WizardModule],
    exports: [...COMPONENTS],
})
export class StepsModule { }