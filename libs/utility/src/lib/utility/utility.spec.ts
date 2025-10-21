import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Utility } from './utility';

describe('Utility', () => {
  let component: Utility;
  let fixture: ComponentFixture<Utility>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Utility],
    }).compileComponents();

    fixture = TestBed.createComponent(Utility);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
