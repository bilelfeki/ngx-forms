import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFormPreviewComponent } from './ngx-form-preview.component';

describe('NgxFormPreviewComponent', () => {
  let component: NgxFormPreviewComponent;
  let fixture: ComponentFixture<NgxFormPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxFormPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxFormPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
