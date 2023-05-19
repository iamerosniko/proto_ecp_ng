import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthsTemplateComponent } from './months-template.component';

describe('MonthsTemplateComponent', () => {
  let component: MonthsTemplateComponent;
  let fixture: ComponentFixture<MonthsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthsTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
