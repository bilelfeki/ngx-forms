import { Component, Input, input, OnInit } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { NgxButtonConfig } from '../../models/ngx-button-config';
import { NgxButtonConfigService } from '../../models/utils/ngx-button-config-util.service';
import { transform } from 'typescript';

@Component({
  selector: 'app-ngx-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngx-button.component.html',
  styleUrl: './ngx-button.component.scss',
})
export class NgxButtonComponent implements OnInit {
  constructor(private ngxButtonConfigService: NgxButtonConfigService) {}
  _buttonConfig!:Partial<NgxButtonConfig>
  @Input() set buttonConfig(config:any){
    this._buttonConfig=config
  };
  ngOnInit(): void {}
}
