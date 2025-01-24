import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromSalesComponent } from './prom-sales.component';

describe('PromSalesComponent', () => {
  let component: PromSalesComponent;
  let fixture: ComponentFixture<PromSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromSalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
