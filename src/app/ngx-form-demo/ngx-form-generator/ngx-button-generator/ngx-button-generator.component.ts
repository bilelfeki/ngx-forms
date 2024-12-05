import { Component, inject } from '@angular/core';
import {NgxButtonConfigService} from '../../../ngx-form-lib/models/utils/ngx-button-config-util.service';
import {NgxButtonConfig} from '../../../ngx-form-lib';
import { NgxButtonModelHandler } from '../../shared/services/ngx-button-model-handler';

@Component({
  selector: 'app-ngx-button-generator',
  standalone: true,
  imports: [],
  templateUrl: './ngx-button-generator.component.html',
  styleUrl: './ngx-button-generator.component.scss'
})
export class NgxButtonGeneratorComponent {
  private ngxButtonModelHandler = inject(NgxButtonModelHandler);
  buttonConfig: NgxButtonConfig = this.ngxButtonModelHandler.ngxButtonConfig;
  get ngxButtonTsCode(): string {
    return JSON.stringify(this.buttonConfig).replace(/"([^"]+)":/g, '$1:');
  }

  get ngxButtonHtmlCode(){
    return "<app-ngx-button [buttonConfig]=\"buttonConfig\"></app-ngx-button>"
  }
}
