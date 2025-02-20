import { Injectable } from "@angular/core";
import { NgxInputConfig } from "../../../ngx-form-lib/models/ngx-input-config";

@Injectable({
  providedIn:'root'
})
export class NgxInputModelHandler{

  _ngxInputConfig:NgxInputConfig={
    type:'email',
    placeholder:'email',
    style: {
      color: '#000',
      width: '16rem', // Responsive width
      height: '2rem', // Adjusted height
      position: 'relative',
      border: '2px solid #3f5888', // Slightly thinner border
      borderRadius: '6px', // More rounded corners
      display: 'block',
      margin: '10px  auto', // Centering input
      padding: '5px 10px', // Better spacing inside input
      fontSize: '1rem', // Adjusted font size
      transition: 'border-color 0.3s ease-in-out',
    },
  };

  get ngxInputConfig(){
    return this._ngxInputConfig;
  }
  set ngxInputConfig(ngxButtonConfig : NgxInputConfig){
   this._ngxInputConfig=ngxButtonConfig;
  }

}
