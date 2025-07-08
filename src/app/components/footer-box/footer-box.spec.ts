import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBox } from './footer-box';

describe('FooterBox', () => {
  let component: FooterBox;
  let fixture: ComponentFixture<FooterBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
