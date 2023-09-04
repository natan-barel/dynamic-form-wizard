import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  AfterViewInit,
  HostListener,
} from '@angular/core';

import { FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';

import { StepPagesService } from "@wizard/services/step-pages.service";
import * as Steps from 'ng-zorro-antd/steps';
import { NzStepsComponent } from 'ng-zorro-antd/steps/steps.component';
// import { WindowRefService } from "../shared/services/window-ref.service";
import { BaseComponent } from '@wizard/shared/components/base-component/base-component';
import { StepPageObject } from '@wizard/shared/models/step-page-object';
import { FirstStepComponent } from '@wizard/steps/first-step/first-step.component';
import { SecondStepComponent } from '@wizard/steps/second-step/second-step.component';
import { ThirdStepComponent } from '@wizard/steps/third-step/third-step.component';
import { WindowRef } from '@shared/services/window-ref.service';

@Component({
  selector: 'app-wizard-stepper',
  templateUrl: './wizard-stepper.component.html',
  styleUrls: ['./wizard-stepper.component.less'],
})
export class WizardStepperComponent
  extends BaseComponent
  implements OnInit, AfterViewInit {
  fadeRight: boolean = true;
  fadeLeft: boolean = false;
  @ViewChild('stepper', { static: false })
  stepper!: NzStepsComponent;
  disposeArr = [];
  _window: any = null;


  // @HostListener('window:popstate', ['$event'])
  // onPopState(event: any) {
  //   console.log(event);
  //   let _urlParts = this.getUrlParts();

  //   if (_urlParts && _urlParts.length > 1 && this.stepper) {
  //     this.moveStepper(parseInt(_urlParts[1]) - 1);
  //   }
  // }

  public steps = this.stepsPagesService.getSteps();

  constructor(
    private stepsPagesService: StepPagesService,
    private window: WindowRef
  ) {
    super();
    this._window = this.window.nativeWindow;
  }

  ngAfterViewInit(): void {
    console.log(this.stepper);
  }

  public goBack(stepper: NzStepsComponent): void {
    this.fadeRight = true;
    this.fadeLeft = false;
    let backwardStep = (this.stepper.nzCurrent - 1);
    this.stepper.nzCurrent = (this.stepper.steps.length + backwardStep) % (this.stepper.steps.length);
  }
  public goForward(stepper: NzStepsComponent): void {
    this.fadeRight = false;
    this.fadeLeft = true;
    let forwardStep = (this.stepper.nzCurrent + 1)
    this.stepper.nzCurrent = (this.stepper.steps.length + forwardStep) % (this.stepper.steps.length);
  }

  public moveStepper(evt: number): void {
    if (this.stepper.nzCurrent > evt) {
      this.fadeRight = true;
      this.fadeLeft = false;
    }
    else {
      this.fadeRight = false;
      this.fadeLeft = true;
    }
    if (this.stepper.nzCurrent != evt) {
      // this.setStepUrl(evt, true);
    }
    this.stepper.nzCurrent = +evt
  }

  override ngOnInit(): void {
    let initalSteps: Array<StepPageObject> = [
      { component: FirstStepComponent, label: '', icon: "user", title: "first-step" },
      { component: SecondStepComponent, label: '', icon: "audit", title: "second-step" },
      { component: ThirdStepComponent, label: '', icon: "info-circle", title: "third-step" },
      { component: FirstStepComponent, label: '', icon: "user", title: 'fourth-step' }
    ];
    this.stepsPagesService.buildSteps(initalSteps);
    // this.setStepUrl(0);
  }

  override ngOnDestroy(): void {
    // this.initDestroy();
    // // @ts-ignore
    // this.onPopState = null;

    // this.disposeArr.forEach((dispose: Function) => {
    //   if (dispose && typeof dispose === 'function') {
    //     dispose();
    //   }
    // });
  }

  getUrlParts() {
    return window.location.href.split(/\?step=/);
  }

  // setStepUrl(i_selectedIndex: any, i_replace: boolean | null = null) {
  //   let _window = this._window ? this._window : this,
  //     _urlParts = this.getUrlParts(),
  //     v_selectedIndex = i_selectedIndex,
  //     v_destUrl = null;

  //   if (
  //     _urlParts &&
  //     _urlParts.length > 0 &&
  //     ((!v_selectedIndex && isNaN(parseInt(i_selectedIndex))) ||
  //       isNaN(parseInt(i_selectedIndex)))
  //   ) {
  //     v_selectedIndex = _urlParts[1];
  //   }

  //   v_destUrl = _urlParts[0] + '?step=' + v_selectedIndex;

  //   if (!this.stepper || i_replace) _window.location.replace(v_destUrl);
  //   else
  //   _window.history.pushState(
  //     { step: v_selectedIndex },
  //     'step' + v_selectedIndex,
  //     v_destUrl
  //   );
  // }

}
