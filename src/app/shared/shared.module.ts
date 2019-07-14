import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const EXPORTING_MODULES = [
  CommonModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: [],
  imports: [
    ...EXPORTING_MODULES
  ],
  exports: [
    ...EXPORTING_MODULES
  ]
})
export class SharedModule { }
