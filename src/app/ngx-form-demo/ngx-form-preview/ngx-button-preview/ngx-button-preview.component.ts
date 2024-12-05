import { Component, inject } from '@angular/core';
import { NgxButtonComponent } from "../../../ngx-form-lib/components/ngx-button/ngx-button.component";
import { NgxButtonModelHandler } from '../../shared/services/ngx-button-model-handler';

@Component({
  selector: 'app-ngx-button-preview',
  standalone: true,
  imports: [NgxButtonComponent],
  templateUrl: './ngx-button-preview.component.html',
  styleUrl: './ngx-button-preview.component.scss'
})
export class NgxButtonPreviewComponent {

  private ngxButtonModelHandler = inject(NgxButtonModelHandler);
  buttonConfig = this.ngxButtonModelHandler.ngxButtonConfig;
}
