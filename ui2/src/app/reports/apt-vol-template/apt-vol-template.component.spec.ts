import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptVolTemplateComponent } from './apt-vol-template.component';

describe('AptVolTemplateComponent', () => {
  let component: AptVolTemplateComponent;
  let fixture: ComponentFixture<AptVolTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AptVolTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AptVolTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
