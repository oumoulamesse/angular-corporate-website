import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItSolutionComponent } from './it-solution.component';

describe('ItSolutionComponent', () => {
  let component: ItSolutionComponent;
  let fixture: ComponentFixture<ItSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItSolutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
