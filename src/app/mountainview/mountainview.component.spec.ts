import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainviewComponent } from './mountainview.component';

describe('MountainviewComponent', () => {
  let component: MountainviewComponent;
  let fixture: ComponentFixture<MountainviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MountainviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MountainviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
