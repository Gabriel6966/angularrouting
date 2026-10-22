import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablaMultiplicarRouting } from './tabla-multiplicar-routing';

describe('TablaMultiplicarRouting', () => {
  let component: TablaMultiplicarRouting;
  let fixture: ComponentFixture<TablaMultiplicarRouting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaMultiplicarRouting],
    }).compileComponents();

    fixture = TestBed.createComponent(TablaMultiplicarRouting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
