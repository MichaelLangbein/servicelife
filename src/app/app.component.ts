import { Component } from '@angular/core';
import { ColorService } from './services/color.service';
import { NumberService } from './services/number.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  providers: [ColorService, NumberService]
})
export class AppComponent {
  title = 'servicelife';
}
