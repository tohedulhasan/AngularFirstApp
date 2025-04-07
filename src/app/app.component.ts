import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,  // ✅ Required for Standalone Components
  imports: [RouterOutlet, RouterLink],  // ✅ Ensures routing works
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularFirstApp';
}
