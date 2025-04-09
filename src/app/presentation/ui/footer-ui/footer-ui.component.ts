import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-ui',
  imports: [],
  templateUrl: './footer-ui.component.html',
  styleUrl: './footer-ui.component.css'
})
export class FooterUiComponent {
  currentYear: number = new Date().getFullYear();
}
