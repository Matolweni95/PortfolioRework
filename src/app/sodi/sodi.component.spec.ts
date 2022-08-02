import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SodiComponent } from './sodi.component';

describe('SodiComponent', () => {
  let component: SodiComponent;
  let fixture: ComponentFixture<SodiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SodiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SodiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
