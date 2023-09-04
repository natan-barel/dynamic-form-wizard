import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StepComponentBase } from '@wizard/stepper/step-component-base/step-component-base';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.less']
})
export class SecondStepComponent extends StepComponentBase implements OnInit {

  constructor(
    protected override cdr: ChangeDetectorRef,
  ) {
    super(cdr);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

}
