import { Component } from '@angular/core';
import {JsonPipe} from '@angular/common';
import {NgxButtonConfigService} from '../../ngx-form-lib/models/utils/ngx-button-config-util.service';
import {NgxButtonConfig} from '../../ngx-form-lib';
import {NgxButtonGeneratorComponent} from './ngx-button-generator/ngx-button-generator.component';

@Component({
  selector: 'app-ngx-form-generator',
  standalone: true,
  imports: [
    JsonPipe,
    NgxButtonGeneratorComponent
  ],
  templateUrl: './ngx-form-generator.component.html',
  styleUrl: './ngx-form-generator.component.scss'
})
export class NgxFormGeneratorComponent {


}
