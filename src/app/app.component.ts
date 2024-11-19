import { Component } from '@angular/core';
import { HeaderComponent } from "./ngx-form-demo/shared/header/header.component";
import { NgxFormPreviewComponent } from "./ngx-form-demo/ngx-form-preview/ngx-form-preview/ngx-form-preview.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, NgxFormPreviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngx-forms';
}
