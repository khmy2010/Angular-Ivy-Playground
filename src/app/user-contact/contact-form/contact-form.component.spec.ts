import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormComponent } from './contact-form.component';
import { DebugElement } from '@angular/core';
import { By, BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormInputControlComponent } from '../form-control/form-input-control.component';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;
  let cb: ComponentFixture<ContactFormComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormComponent, FormInputControlComponent ],
      imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    cb = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the component.', () => {
    expect(component).toBeTruthy();
  });

  it('should not be able to submit form', () => {
    spyOn(component, 'submit')
    debugElement.query(By.css('button')).triggerEventHandler('click', null);
    expect(component.submit).toHaveBeenCalledTimes(0);
  });
});
