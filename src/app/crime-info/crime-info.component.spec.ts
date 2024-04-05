import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeInfoComponent } from './crime-info.component';

describe('CrimeInfoComponent', () => {
  let component: CrimeInfoComponent;
  let fixture: ComponentFixture<CrimeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrimeInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrimeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
