import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { StepPagesService } from '@wizard/services/step-pages.service';
import { BaseComponent } from '@wizard/shared/components/base-component/base-component';
import { StepPageObject } from '@wizard/shared/models/step-page-object';

@Component({
  template: '',
})
export class StepComponentBase
  extends BaseComponent
  implements OnInit, OnDestroy {
  @Input() currentStep!: StepPageObject;
  @Input() stepIndex!: number;
  @Input() stepsLength!: number;
  @Input() stepBlocked: boolean = false;
  @Output() onStepSubmit: EventEmitter<any> = new EventEmitter();
  @Output() onStepBack: EventEmitter<any> = new EventEmitter();
  @Output() goToStepByIndex: EventEmitter<any> = new EventEmitter();
  // private steps: StepPageObject[];
  // currentStepIndex: number;

  constructor(
    protected cdr: ChangeDetectorRef
  ) {
    super();
    // this.steps = [];
    // this.currentStepIndex = 0;
  }

  submit() {
    this.goToNextStep();
  }

  goToNextStep() {
    this.onStepSubmit.emit();
  }

  goToBackStep() {
    this.onStepBack.emit();
  }

  goToStep(index: number) {
    this.goToStepByIndex.emit(index);
  }

  hasNext(): boolean {
    return this.stepsLength ? this.stepIndex !== this.stepsLength - 1 : false
  }

  hasBack(): boolean {
    return this.stepIndex !== 0 && !this.stepBlocked;
  }

}