import { Component } from '@angular/core';
import { NgxButtonComponent } from "../../../ngx-form-lib/components/ngx-button/ngx-button.component";

@Component({
  selector: 'app-ngx-button-preview',
  standalone: true,
  imports: [NgxButtonComponent],
  templateUrl: './ngx-button-preview.component.html',
  styleUrl: './ngx-button-preview.component.scss'
})
export class NgxButtonPreviewComponent {
  buttonConfig = {
    color: '#3f51b5',
    background: '#00000',
    fontSize: '20px',
    width: '100px',
    height: '30px',
    top: '50px',
    right: '509.2px',
    bottom: '290px',
    left: '69.2px',
    position:'relative',
    border: '1px solid #3f51b5',
    borderRadius:'50px'
  };
}
