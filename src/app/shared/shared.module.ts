import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingSplashComponent } from './loading-splash/loading-splash.component';

const EXPORTING_MODULES = [
  CommonModule,
  ReactiveFormsModule
];

const EXPORTING_COMPONENTS = [
  LoadingSplashComponent
];

@NgModule({
  declarations: [
    ...EXPORTING_COMPONENTS
  ],
  imports: [
    ...EXPORTING_MODULES
  ],
  exports: [
    ...EXPORTING_MODULES,
    ...EXPORTING_COMPONENTS
  ]
})
export class SharedModule { }
