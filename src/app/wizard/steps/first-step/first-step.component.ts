import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { StepComponentBase } from '@wizard/stepper/step-component-base/step-component-base';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.less'],
})
export class FirstStepComponent extends StepComponentBase implements OnInit {

  constructor(
    protected override cdr: ChangeDetectorRef,
  ) {
    super(cdr);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

}
