import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxButtonGeneratorComponent } from './ngx-button-generator.component';

describe('NgxButtonGeneratorComponent', () => {
  let component: NgxButtonGeneratorComponent;
  let fixture: ComponentFixture<NgxButtonGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxButtonGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxButtonGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
