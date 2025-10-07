import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TListComponent } from './list.component';

describe('ListComponent', () => {
  let component: TListComponent;
  let fixture: ComponentFixture<TListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
