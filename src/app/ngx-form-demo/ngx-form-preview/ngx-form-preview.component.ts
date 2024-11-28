import { Component } from '@angular/core';
import { NgxButtonPreviewComponent } from "./ngx-button-preview/ngx-button-preview.component";

@Component({
  selector: 'app-ngx-form-preview',
  standalone: true,
  imports: [NgxButtonPreviewComponent],
  templateUrl: './ngx-form-preview.component.html',
  styleUrl: './ngx-form-preview.component.scss'
})
export class NgxFormPreviewComponent {

}
