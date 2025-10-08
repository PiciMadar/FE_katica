import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriListComponent } from './list.component';

describe('ListComponent', () => {
  let component: PriListComponent;
  let fixture: ComponentFixture<PriListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
