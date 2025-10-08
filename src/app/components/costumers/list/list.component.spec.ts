import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosListComponent } from './list.component';

describe('ListComponent', () => {
  let component: CosListComponent;
  let fixture: ComponentFixture<CosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CosListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
