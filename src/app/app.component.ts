import { Component } from '@angular/core';
import { HeaderComponent } from "./ngxFormDemo/shared/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngx-forms';
}
