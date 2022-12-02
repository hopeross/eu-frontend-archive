import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbarnComponent } from './addbarn.component';

describe('AddbarnComponent', () => {
  let component: AddbarnComponent;
  let fixture: ComponentFixture<AddbarnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbarnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbarnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
