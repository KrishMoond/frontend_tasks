import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Classtask } from './classtask';

describe('Classtask', () => {
  let component: Classtask;
  let fixture: ComponentFixture<Classtask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Classtask],
    }).compileComponents();

    fixture = TestBed.createComponent(Classtask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
