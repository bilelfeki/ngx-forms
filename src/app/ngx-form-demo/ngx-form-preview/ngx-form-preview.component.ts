import { Component } from '@angular/core';
import { NgxButtonPreviewComponent } from "./ngx-button-preview/ngx-button-preview.component";
import { NgxInputPreviewComponent } from "./ngx-input-preview/ngx-input-preview.component";

@Component({
  selector: 'app-ngx-form-preview',
  standalone: true,
  imports: [NgxButtonPreviewComponent, NgxInputPreviewComponent],
  templateUrl: './ngx-form-preview.component.html',
  styleUrl: './ngx-form-preview.component.scss'
})
export class NgxFormPreviewComponent {

}
