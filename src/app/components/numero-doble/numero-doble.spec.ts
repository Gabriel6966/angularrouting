import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NumeroDoble } from './numero-doble';

describe('NumeroDoble', () => {
  let component: NumeroDoble;
  let fixture: ComponentFixture<NumeroDoble>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumeroDoble],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NumeroDoble);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
