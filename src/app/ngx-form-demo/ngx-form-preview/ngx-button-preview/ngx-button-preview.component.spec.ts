import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxButtonPreviewComponent } from './ngx-button-preview.component';

describe('NgxButtonPreviewComponent', () => {
  let component: NgxButtonPreviewComponent;
  let fixture: ComponentFixture<NgxButtonPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxButtonPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxButtonPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
