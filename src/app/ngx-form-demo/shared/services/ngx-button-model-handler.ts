import { Injectable } from "@angular/core";
import { NgxButtonConfig } from "../../../ngx-form-lib";

@Injectable({
  providedIn:'root'
})
export class NgxButtonModelHandler{
  _ngxButtonConfig:NgxButtonConfig={
    color: '#FFFFFF',
    background: '#2f227a',
    fontSize: '20px',
    width: '100px',
    height: '30px',
    top: '50px',
    right: '509.2px',
    bottom: '290px',
    left: '69.2px',
    position:'relative',
    border: '1px solid #3f51b5',
    borderRadius:'10px'
  };

  get ngxButtonConfig(){
    return this._ngxButtonConfig;
  }
  set ngxButtonConfig(ngxButtonConfig : NgxButtonConfig){
   this._ngxButtonConfig=ngxButtonConfig;
  }

}
