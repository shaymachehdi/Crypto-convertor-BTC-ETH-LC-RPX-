import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionPage } from './conversion.page';

describe('ConversionPage', () => {
  let component: ConversionPage;
  let fixture: ComponentFixture<ConversionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
