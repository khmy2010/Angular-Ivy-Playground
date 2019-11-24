import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RouterModule } from '@angular/router';
import { FormInputControlComponent } from './form-control/form-input-control.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ContactFormComponent, FormInputControlComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: ContactFormComponent }
    ])
  ]
})
export class UserContactModule { }
