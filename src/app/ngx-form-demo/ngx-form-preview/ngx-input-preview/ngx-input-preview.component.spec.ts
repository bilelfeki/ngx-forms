import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxInputPreviewComponent } from './ngx-input-preview.component';

describe('NgxInputPreviewComponent', () => {
  let component: NgxInputPreviewComponent;
  let fixture: ComponentFixture<NgxInputPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxInputPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxInputPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
