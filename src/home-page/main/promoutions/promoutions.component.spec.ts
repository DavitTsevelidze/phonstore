import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoutionsComponent } from './promoutions.component';

describe('PromoutionsComponent', () => {
  let component: PromoutionsComponent;
  let fixture: ComponentFixture<PromoutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromoutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
