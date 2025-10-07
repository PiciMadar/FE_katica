import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CListComponent } from './list.component';

describe('ListComponent', () => {
  let component: CListComponent;
  let fixture: ComponentFixture<CListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
