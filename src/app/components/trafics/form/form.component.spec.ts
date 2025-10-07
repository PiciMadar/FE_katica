import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraFormComponent } from './form.component';

describe('FormComponent', () => {
  let component: TraFormComponent;
  let fixture: ComponentFixture<TraFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
