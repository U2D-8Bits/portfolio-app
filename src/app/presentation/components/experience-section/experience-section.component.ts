import { Component } from '@angular/core';

//? Módulos de PrimeNG

//? Módulos / Interfaces personalizados
import { ExperienceBoxComponent } from '../../ui/experience-box/experience-box.component';

@Component({
  selector: 'app-experience-section',
  imports: [
    ExperienceBoxComponent
],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.css'
})
export class ExperienceSectionComponent {

}
