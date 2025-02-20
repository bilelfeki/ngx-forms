import { Component } from '@angular/core';
import { NgxButtonGeneratorComponent } from './ngx-button-generator/ngx-button-generator.component';

@Component({
  selector: 'app-ngx-form-generator',
  standalone: true,
  imports: [
    NgxButtonGeneratorComponent
  ],
  templateUrl: './ngx-form-generator.component.html',
  styleUrl: './ngx-form-generator.component.scss'
})
export class NgxFormGeneratorComponent {


}
