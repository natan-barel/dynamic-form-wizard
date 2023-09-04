import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { TranslateModule } from '@ngx-translate/core';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';
import { NumberToTextPipe } from './pipes/number-to-text.pipe';

// #region third libs

const THIRDMODULES: Type<any>[] = [];

// #endregion

// #region your componets & directives

const COMPONENTS: Type<any>[] = [];
const DIRECTIVES: Type<any>[] = [];
const PIPES: Type<any>[] = [NumberToTextPipe];

// #endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ...SHARED_ZORRO_MODULES,
    // third libs
    ...THIRDMODULES
  ],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    //TranslateModule,
    ...SHARED_ZORRO_MODULES,
    // third libs
    ...THIRDMODULES,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ]
})
export class SharedModule { }