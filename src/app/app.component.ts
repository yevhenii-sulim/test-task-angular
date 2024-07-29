import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormPassComponent } from './pages/form-pass/form-pass.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormPassComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title='Password'
}
