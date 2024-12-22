import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sublevel1Component } from './sublevel1.component';

describe('Sublevel1Component', () => {
  let component: Sublevel1Component;
  let fixture: ComponentFixture<Sublevel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sublevel1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sublevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
