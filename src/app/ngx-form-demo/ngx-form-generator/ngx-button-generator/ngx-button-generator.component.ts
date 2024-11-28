import { Component } from '@angular/core';
import {NgxButtonConfigService} from '../../../ngx-form-lib/models/utils/ngx-button-config-util.service';
import {NgxButtonConfig} from '../../../ngx-form-lib';

@Component({
  selector: 'app-ngx-button-generator',
  standalone: true,
  imports: [],
  templateUrl: './ngx-button-generator.component.html',
  styleUrl: './ngx-button-generator.component.scss'
})
export class NgxButtonGeneratorComponent {
  constructor(private ngxButtonConfigService: NgxButtonConfigService) {
  }

  buttonConfig: NgxButtonConfig = {
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
  get ngxButtonTsCode(): string {
    return JSON.stringify(this.buttonConfig).replace(/"([^"]+)":/g, '$1:');
  }

  get ngxButtonHtmlCode(){
    return "<app-ngx-button [buttonConfig]=\"buttonConfig\"></app-ngx-button>"
  }
}
