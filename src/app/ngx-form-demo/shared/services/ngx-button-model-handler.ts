import { Injectable } from "@angular/core";
import { NgxButtonConfig } from "../../../ngx-form-lib";

@Injectable({
  providedIn:'root'
})
export class NgxButtonModelHandler{
  _ngxButtonConfig: NgxButtonConfig = {
    name:'button',
    color: '#FFFFFF',
    background: '#3f51b5',
    fontSize: '18px',
    width: '90px',
    height: '30px',
    position: 'relative',
    border: 'none',
    borderRadius: '8px',
    margin:'10px 60px',
    top:'8px',
    left:"90px",
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    hoverBackground: '#303f9f'
  };

  get ngxButtonConfig(){
    return this._ngxButtonConfig;
  }
  set ngxButtonConfig(ngxButtonConfig : NgxButtonConfig){
   this._ngxButtonConfig=ngxButtonConfig;
  }

}
