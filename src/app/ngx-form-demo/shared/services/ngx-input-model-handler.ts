import { Injectable } from "@angular/core";
import { NgxInputConfig } from "../../../ngx-form-lib/models/ngx-input-config";

@Injectable({
  providedIn:'root'
})
export class NgxInputModelHandler{

  _ngxInputConfig:NgxInputConfig={
    type:'email'
  };

  get ngxInputConfig(){
    return this._ngxInputConfig;
  }
  set ngxInputConfig(ngxButtonConfig : NgxInputConfig){
   this._ngxInputConfig=ngxButtonConfig;
  }

}
