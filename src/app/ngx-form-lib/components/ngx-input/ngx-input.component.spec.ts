import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxInputComponent } from './ngx-input.component';

describe('NgxInputComponent', () => {
  let component: NgxInputComponent;
  let fixture: ComponentFixture<NgxInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
