import { Component, Input, input, OnInit } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { NgxButtonConfig } from '../../models/ngx-button-config';
import { NgxButtonConfigService } from '../../models/utils/ngx-button-config-util.service';
import { transform } from 'typescript';
import { NgxInputConfig } from '../../models/ngx-input-config';

@Component({
  selector: 'app-ngx-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngx-button.component.html',
  styleUrl: './ngx-button.component.scss',
})
export class NgxButtonComponent implements OnInit {
  constructor() {}
  _buttonConfig :Partial<NgxButtonConfig>=   {
    name:'submit',
    color: '#FFFFFF',
    background: '#3f51b5',
    fontSize: '18px',
    width: '90px',
    height: '30px',
    position: 'relative',
    border: 'none',
    borderRadius: '8px',
    top:'30px',
    left:"100px",
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    hoverBackground: '#303f9f'
  };
   _ngxInputConfig:NgxInputConfig={
      type:'text',
      placeholder:'Name',
      style: {
        color: '#000',
        width: '18rem',
        height: '3rem',
        position: 'relative',
        border: '2px solid #3f5888',
        borderRadius: '6px',
        display: 'block',
        padding: '5px 10px',
        fontSize: '1rem',
        transition: 'border-color 0.3s ease-in-out',
        top:'10px',
        left:'10px'
      },
    };

    _ngxInputConfig1:NgxInputConfig={
      type:'email',
      placeholder:'email',
      style: {
        color: '#000',
        width: '18rem',
        height: '3rem',
        position: 'relative',
        border: '2px solid #3f5888',
        borderRadius: '6px',
        display: 'block',
        padding: '5px 10px',
        fontSize: '1rem',
        transition: 'border-color 0.3s ease-in-out',
        top:'20px',
        left:'10px'
      },
    };
    _ngxInputConfig2:NgxInputConfig={
      type:'email',
      placeholder:'email',
      style: {
        color: '#000',
        width: '18rem',
        height: '3rem',
        position: 'relative',
        border: '2px solid #3f5888',
        borderRadius: '6px',
        display: 'block',
        padding: '5px 10px',
        fontSize: '1rem',
        transition: 'border-color 0.3s ease-in-out',
        top:'30px',
        left:'10px'
      },
    };
    form={
      button:this._buttonConfig,
      input:this._ngxInputConfig,
      input1:this._ngxInputConfig1,
      input2:this._ngxInputConfig2
    };

  ngOnInit(): void {}

  get ngxButtonTsCode(): string {
    return JSON.stringify(this.form).replace(/"([^"]+)":/g, '$1:');
  }

  get ngxButtonHtmlCode(){
    return "<app-ngx-button [buttonConfig]=\"buttonConfig\"></app-ngx-button>"
  }
}
