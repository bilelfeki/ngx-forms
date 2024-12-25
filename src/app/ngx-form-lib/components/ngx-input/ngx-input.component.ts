import { Component, Input } from '@angular/core';
import { NgxInputConfig } from '../../models/ngx-input-config';

@Component({
  selector: 'app-ngx-input',
  standalone: true,
  imports: [],
  templateUrl: './ngx-input.component.html',
  styleUrl: './ngx-input.component.scss',
})
export class NgxInputComponent {
  _inputConfig!: Partial<NgxInputConfig>;
  @Input() set inputConfig(config: Partial<NgxInputConfig>) {
    this._inputConfig = config;
  }
}
