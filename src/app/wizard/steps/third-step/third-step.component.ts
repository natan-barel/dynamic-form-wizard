import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StepComponentBase } from '@wizard/stepper/step-component-base/step-component-base';

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.less']
})
export class ThirdStepComponent extends StepComponentBase implements OnInit {

  constructor(
    protected override cdr: ChangeDetectorRef,
  ) {
    super(cdr);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

}
