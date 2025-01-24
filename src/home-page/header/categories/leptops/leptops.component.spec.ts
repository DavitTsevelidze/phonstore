import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeptopsComponent } from './leptops.component';

describe('LeptopsComponent', () => {
  let component: LeptopsComponent;
  let fixture: ComponentFixture<LeptopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeptopsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
