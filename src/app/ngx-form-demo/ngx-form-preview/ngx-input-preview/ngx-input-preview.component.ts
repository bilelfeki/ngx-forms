import { Component, inject } from '@angular/core';
import { NgxInputComponent } from "../../../ngx-form-lib/components/ngx-input/ngx-input.component";
import { NgxInputModelHandler } from '../../shared/services/ngx-input-model-handler';

@Component({
  selector: 'app-ngx-input-preview',
  standalone: true,
  imports: [NgxInputComponent],
  templateUrl: './ngx-input-preview.component.html',
  styleUrl: './ngx-input-preview.component.scss'
})
export class NgxInputPreviewComponent {
    private ngxButtonModelHandler = inject(NgxInputModelHandler);
    inputConfig = this.ngxButtonModelHandler.ngxInputConfig;

}
