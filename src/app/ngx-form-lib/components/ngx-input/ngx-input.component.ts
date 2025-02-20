import { Component, Input } from '@angular/core';
import { NgxInputConfig } from '../../models/ngx-input-config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngx-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngx-input.component.html',
  styleUrl: './ngx-input.component.scss',
})
export class NgxInputComponent {
  _inputConfig!: Partial<NgxInputConfig>;
  @Input() set inputConfig(config: Partial<NgxInputConfig>) {
    this._inputConfig = config;
  }
}
