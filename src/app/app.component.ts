import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinearGaugeModule } from '@syncfusion/ej2-angular-lineargauge';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LinearGaugeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public line?:Object;
  public labelStyle:Object = { format: '{value}°C'};
  ngOnInit() {
    this.line = {
      height: 350,
      width: 7,
      color: '#4286f4'
    }
  }
  title = 'myangularapp';
}
