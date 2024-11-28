import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFormGeneratorComponent } from './ngx-form-generator.component';

describe('NgxFormGeneratorComponent', () => {
  let component: NgxFormGeneratorComponent;
  let fixture: ComponentFixture<NgxFormGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxFormGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxFormGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
